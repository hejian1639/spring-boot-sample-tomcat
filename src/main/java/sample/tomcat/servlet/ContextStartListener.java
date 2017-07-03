package sample.tomcat.servlet;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.websocket.DeploymentException;
import javax.websocket.server.ServerEndpointConfig;

import org.apache.tomcat.websocket.server.Constants;
import org.apache.tomcat.websocket.server.WsServerContainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

import sample.tomcat.service.HelloWorldService;

public class ContextStartListener implements ServletContextListener {
	
	@Autowired
	private ApplicationContext context;
	
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
			HelloWorldService service = (HelloWorldService) context.getBean("helloWorldService");
	        System.out.println(service.getHelloMessage()); 
			sc.addEndpoint(ServerEndpointConfig.Builder.create(EchoEndpoint.class, "/websocket/echoProgrammatic").build());
		} catch (DeploymentException e) {
			e.printStackTrace();
		}

	}

}
