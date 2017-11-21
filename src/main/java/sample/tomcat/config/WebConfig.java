/*
 * Copyright 2012-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package sample.tomcat.config;

import java.nio.charset.Charset;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContextListener;
import javax.sql.DataSource;

import org.apache.catalina.connector.Connector;
import org.apache.catalina.servlets.DefaultServlet;
import org.apache.coyote.http11.Http11Nio2Protocol;
import org.glassfish.jersey.servlet.ServletContainer;
import org.glassfish.jersey.servlet.ServletProperties;
import org.h2.server.web.WebServlet;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.boot.autoconfigure.ConfigurationCustomizer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import sample.tomcat.data.Account;
import sample.tomcat.servlet.AnotationWsContextStartListener;
import sample.tomcat.servlet.ContextStartListener;
import sample.tomcat.servlet.DynamicJSP;
import sample.tomcat.servlet.HelloServlet;
import sample.tomcat.servlet.HttpSessionFilter;
import sample.tomcat.servlet.ShineyueTomcatEmbeddedServletContainerFactory;

//@EnableWebMvc
//@ComponentScan(basePackages = { "sample.tomcat.controller" })
@Configuration
public class WebConfig /* extends WebMvcConfigurationSupport */ {

    @Bean
    protected ServletContextListener listener() {
        return new ContextStartListener();
    }

    @Profile({ "dev" })
    @Bean
    protected AnotationWsContextStartListener anotationWsContextStartListener() {
        System.out.println("anotationWsContextStartListener");
        return new AnotationWsContextStartListener();
    }

    // @Override
    // public void addInterceptors(InterceptorRegistry registry) {
    // WebContentInterceptor webContentInterceptor = new
    // WebContentInterceptor();
    // webContentInterceptor.setCacheSeconds(0);
    // webContentInterceptor.setUseExpiresHeader(true);
    // webContentInterceptor.setUseCacheControlHeader(true);
    // webContentInterceptor.setUseCacheControlNoStore(false);
    // registry.addInterceptor(webContentInterceptor);
    // }

    // @Bean
    // public EmbeddedServletContainerFactory servletContainer() {
    // TomcatEmbeddedServletContainerFactory tomcat = new TomcatEmbeddedServletContainerFactory();
    // tomcat.setUriEncoding(Charset.forName("UTF-8"));
    // tomcat.addAdditionalTomcatConnectors(createNioConnector());
    // return tomcat;
    // }
    //
    Connector createNioConnector() {
        Connector connector = new Connector("org.apache.coyote.http11.Http11Nio2Protocol");
        Http11Nio2Protocol protocol = (Http11Nio2Protocol) connector.getProtocolHandler();
        protocol.setConnectionTimeout(200);
        protocol.setMaxThreads(5);
        protocol.setMaxConnections(1000);
        connector.setScheme("http");
        connector.setPort(8015);// 自定义的
        connector.setRedirectPort(8443);

        return connector;
    }

    @Bean
    public EmbeddedServletContainerFactory servletContainer() {
        ShineyueTomcatEmbeddedServletContainerFactory tomcat = new ShineyueTomcatEmbeddedServletContainerFactory();
        tomcat.setUriEncoding(Charset.forName("UTF-8"));
        return tomcat;
    }

    @Bean
    public SqlSessionFactoryBean sqlSessionFactory() throws SQLException {
        SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
        sqlSessionFactory.setDataSource(h2DataSource());
        sqlSessionFactory.setTypeAliasesPackage("sample.tomcat.data");
        return sqlSessionFactory;
    }

    @Bean
    public ServletRegistrationBean simpleServlet() {
        return new ServletRegistrationBean(new HelloServlet(), "/simple_servlet");
    }

    @Bean
    public ServletRegistrationBean myDefaultServlet() {
        ServletRegistrationBean registration = new ServletRegistrationBean(new sample.tomcat.servlet.DefaultServlet(), "/default/*");
        registration.setName("myDefault");
        return registration;
    }

    @Bean
    public ServletRegistrationBean dynamicJSP() {
        return new ServletRegistrationBean(new DynamicJSP(), "/jsp");
    }

    @Bean
    public ServletRegistrationBean defaultServlet() {
        ServletRegistrationBean registration = new ServletRegistrationBean(new DefaultServlet(), "*.gif", "*.ttf", "*.gif", "*.woff", "*.svg", "*.js", "*.jpg", "*.html", "*.css",
                "*.png", "*.mp4", "*.m4a", "*.ogg");
        registration.setLoadOnStartup(1);
        Map<String, String> params = new HashMap<String, String>();
        params.put("debug", "0");
        params.put("listings", "false");
        registration.setInitParameters(params);
        return registration;
    }

    @Bean
    public ServletRegistrationBean jerseyServlet() {
        ServletRegistrationBean registration = new ServletRegistrationBean(new ServletContainer(), "/jersey/*");
        registration.addInitParameter(ServletProperties.JAXRS_APPLICATION_CLASS, JerseyConfig.class.getName());
        return registration;
    }

    @Bean
    public FilterRegistrationBean someFilterRegistration() {

        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setName("httpSessionFilter");
        registration.setFilter(new HttpSessionFilter());
        registration.addUrlPatterns("/*");
        return registration;
    }

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/");
        return viewResolver;
    }

    public DataSource mysqlDataSource() throws SQLException {
        System.out.println("dataSource");

        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl(
                "jdbc:mysql://localhost:3306/spring_boot_test?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&autoReconnect=true&useSSL=false");
        dataSource.setUsername("root");
        dataSource.setPassword("UwtDQjgQ8E");
        return dataSource;
    }

    public DataSource h2DataSource() throws SQLException {
        System.out.println("dataSource");

        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.h2.Driver");
        dataSource.setUrl("jdbc:h2:file:~/test");
        dataSource.setUsername("sa");
        dataSource.setPassword("");
        return dataSource;
    }

    @Profile({ "dev", "prod" })
    @Bean
    public DataSource dataSourceBean() throws SQLException {
        return h2DataSource();
    }

    @Bean
    ServletRegistrationBean h2servletRegistration() {
        return new ServletRegistrationBean(new WebServlet(), "/h2-console/*");

    }

    @Bean
    ConfigurationCustomizer mybatisConfigurationCustomizer() {
        return new ConfigurationCustomizer() {

            @Override
            public void customize(org.apache.ibatis.session.Configuration conf) {
                conf.getTypeAliasRegistry().registerAlias(Account.class);
            }
        };
    }

    // @Bean
    // // Only used when running in embedded servlet
    // public DispatcherServlet dispatcherServlet() {
    // return new DispatcherServlet();
    // }
    //
    // @Override
    // public void
    // configureDefaultServletHandling(DefaultServletHandlerConfigurer
    // configurer) {
    // configurer.enable();
    // }
    //

}
