package sample.tomcat.controller;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")
public class SpringBeanUtils implements ApplicationContextAware {
	private static ApplicationContext ac;

	public static Object getBeanByName(String beanName) {
		if (ac != null) {
			return ac.getBean(beanName);
		}
		return null;
	}

	public static Object getBeanByType(String beanName,Class<?> clazz) {
		if (ac != null) {
			ac.getBean(beanName,clazz);
		}
		return null;
	}

	@Override
	public void setApplicationContext(ApplicationContext arg0)
			throws BeansException {
		ac = arg0;
	}
}
