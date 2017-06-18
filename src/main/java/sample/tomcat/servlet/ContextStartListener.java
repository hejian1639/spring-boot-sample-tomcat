package sample.tomcat.servlet;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.websocket.DeploymentException;
import javax.websocket.server.ServerEndpointConfig;

import org.apache.tomcat.websocket.server.Constants;
import org.apache.tomcat.websocket.server.WsServerContainer;

public class ContextStartListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		System.out.println("contextDestroyed");
	}

	@Override
	public void contextInitialized(ServletContextEvent event) {
		System.out.println("contextInitialized");

		WsServerContainer sc = (WsServerContainer) event.getServletContext()
				.getAttribute(Constants.SERVER_CONTAINER_SERVLET_CONTEXT_ATTRIBUTE);

		try {
			sc.addEndpoint(
					ServerEndpointConfig.Builder.create(EchoEndpoint.class, "/websocket/echoProgrammatic").build());
			sc.addEndpoint(EchoAnnotation.class);
		} catch (DeploymentException e) {
			e.printStackTrace();
		}

	}

}
