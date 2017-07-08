/**
 *    Copyright 2010-2016 the original author or authors.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
package sample.tomcat.service;

import static org.springframework.util.StringUtils.hasLength;
import static org.springframework.util.StringUtils.tokenizeToStringArray;

import java.io.IOException;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.apache.ibatis.datasource.unpooled.UnpooledDataSource;
import org.apache.ibatis.mapping.Environment;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.defaults.DefaultSqlSessionFactory;
import org.apache.ibatis.transaction.TransactionFactory;
import org.apache.ibatis.transaction.jdbc.JdbcTransactionFactory;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Service;

import sample.tomcat.data.Account;
import sample.tomcat.mapper.AccountMapper;

@Service
public class AccountService {


	SqlSessionFactory sqlSessionFactory;
	private AccountMapper accountMapper;
	private SqlSession session = null;

	DataSource dataSource() throws SQLException {
		System.out.println("dataSource");

		UnpooledDataSource dataSource = new UnpooledDataSource("com.mysql.cj.jdbc.Driver", 
				"jdbc:mysql://localhost:3306/spring_boot_test?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&autoReconnect=true&useSSL=false",
				"root",
				"UwtDQjgQ8E");
//		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
//		dataSource.setUrl(
//				"jdbc:mysql://localhost:3306/spring_boot_test?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&autoReconnect=true&useSSL=false");
//		dataSource.setUsername("root");
//		dataSource.setPassword("UwtDQjgQ8E");
		return dataSource;
	}

	protected SqlSessionFactory buildSqlSessionFactory() throws IOException, SQLException {

		Configuration configuration = new Configuration();

		String typeAliasesPackage = "sample.tomcat.data";
		if (hasLength(typeAliasesPackage)) {
			String[] typeAliasPackageArray = tokenizeToStringArray(typeAliasesPackage,
					ConfigurableApplicationContext.CONFIG_LOCATION_DELIMITERS);
			for (String packageToScan : typeAliasPackageArray) {
				configuration.getTypeAliasRegistry().registerAliases(packageToScan, Object.class);
			}
		}
		TransactionFactory transactionFactory = new JdbcTransactionFactory();
		configuration.setEnvironment(
				new Environment(AccountService.class.getSimpleName(), transactionFactory, dataSource()));

		configuration.addMapper(AccountMapper.class);
		return new DefaultSqlSessionFactory(configuration);
	}

	void setupSession() throws Exception {
		if (sqlSessionFactory == null) {

			sqlSessionFactory = buildSqlSessionFactory();
		}
		if (session == null) {
			session = sqlSessionFactory.openSession();
		}

		if (accountMapper == null) {
			// connection!
			accountMapper = session.getMapper(AccountMapper.class);

		}
	}

	public Account getAccount(String username) throws Exception {
		setupSession();
		return accountMapper.getAccountByUsername(username);
	}

	public void insertAccount(Account account) throws Exception {
		setupSession();

		try {
			accountMapper.insertAccount(account);
			session.commit(); // This commits the data to the database. Required

		} catch (Exception e) {
			session.rollback();
			throw e;
		}
	}

	public void updateAccount(Account account) throws Exception {
		setupSession();

		try {
			accountMapper.updateAccount(account);
			session.commit(); // This commits the data to the database. Required

		} catch (Exception e) {
			session.rollback();
			throw e;
		}
	}
}
