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

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContextListener;

import org.apache.catalina.servlets.DefaultServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import sample.tomcat.servlet.ContextStartListener;
import sample.tomcat.servlet.HelloServlet;

@EnableWebMvc
@ComponentScan(basePackages = { "sample.tomcat.web" })
@Configuration
public class WebConfig extends WebMvcConfigurationSupport {

	@Bean
	protected ServletContextListener listener() {
		return new ContextStartListener();
	}

	@Bean
	public ServletRegistrationBean simpleServlet() {
		return new ServletRegistrationBean(new HelloServlet(), "/simple_servlet");// ServletNameĬ��ֵΪ����ĸСд����myServlet
	}

	@Bean
	public ServletRegistrationBean defaultServlet() {
		ServletRegistrationBean registration = new ServletRegistrationBean(new DefaultServlet(), "*.gif", "*.ttf",
				"*.gif", "*.woff", "*.svg", "*.js", "*.jpg", "*.html", "*.css", "*.png", "*.mp4", "*.m4a", "*.ogg");
		registration.setLoadOnStartup(1);
		Map<String, String> params = new HashMap<String, String>();
		params.put("debug", "0");
		params.put("listings", "false");
		registration.setInitParameters(params);
		return registration;
		// return new ServletRegistrationBean(new DefaultServlet(), "*.gif",
		// "*.ttf","*.gif","*.woff","*.svg","*.js","*.jpg","*.html","*.css","*.png","*.mp4","*.m4a","*.ogg");//
		// ServletNameĬ��ֵΪ����ĸСд����myServlet
	}

//	@Override
//	public void addViewControllers(ViewControllerRegistry registry) {
//		// registry.addViewController("/").setViewName("home");
//	}

	@Bean
	public InternalResourceViewResolver viewResolver() {
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setPrefix("/");
		return viewResolver;
	}

//	@Bean
//	// Only used when running in embedded servlet
//	public DispatcherServlet dispatcherServlet() {
//		return new DispatcherServlet();
//	}
//
//	@Override
//	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
//		configurer.enable();
//	}
//

}