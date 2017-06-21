package sample.tomcat.servlet;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.websocket.DeploymentException;

import org.apache.tomcat.websocket.server.Constants;
import org.apache.tomcat.websocket.server.WsServerContainer;

public class AnotationWsContextStartListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
	}

	@Override
	public void contextInitialized(ServletContextEvent event) {

		WsServerContainer sc = (WsServerContainer) event.getServletContext()
				.getAttribute(Constants.SERVER_CONTAINER_SERVLET_CONTEXT_ATTRIBUTE);

		try {
			sc.addEndpoint(EchoAnnotation.class);
		} catch (DeploymentException e) {
			e.printStackTrace();
		}

	}

}
