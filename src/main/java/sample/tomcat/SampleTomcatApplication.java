/*
 * Copyright 2012-2013 the original author or authors.
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

package sample.tomcat;

import javax.servlet.ServletContextListener;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

import sample.tomcat.servlet.ContextStartListener;
import sample.tomcat.servlet.HelloServlet;

@SpringBootApplication
public class SampleTomcatApplication extends SpringBootServletInitializer {

	private static Log logger = LogFactory.getLog(SampleTomcatApplication.class);

	@Bean
	protected ServletContextListener listener() {
		return new ContextStartListener();
	}

	@Bean
    public ServletRegistrationBean servletRegistrationBean() {
        return new ServletRegistrationBean(new HelloServlet(), "/simple_servlet");// ServletName默认值为首字母小写，即myServlet
    }
	
	public static void main(String[] args) throws Exception {
		SpringApplication.run(SampleTomcatApplication.class, args);
	}

}
