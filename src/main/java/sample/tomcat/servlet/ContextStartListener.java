package sample.tomcat.servlet;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * 程序启动部署时,启动事务引擎
 *
 */
public class ContextStartListener implements ServletContextListener {
    

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
        System.out.println("contextDestroyed"); 
	}

	@Override
	public void contextInitialized(ServletContextEvent event) {
        System.out.println("contextInitialized"); 
	}
}
