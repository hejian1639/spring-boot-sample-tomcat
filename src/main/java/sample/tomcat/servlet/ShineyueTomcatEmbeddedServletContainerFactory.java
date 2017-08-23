package sample.tomcat.servlet;

import java.io.File;

import org.apache.catalina.connector.Connector;
import org.apache.catalina.startup.Tomcat;
import org.apache.coyote.AbstractProtocol;
import org.springframework.boot.context.embedded.EmbeddedServletContainer;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.boot.web.servlet.ServletContextInitializer;

public class ShineyueTomcatEmbeddedServletContainerFactory extends TomcatEmbeddedServletContainerFactory {
	public ShineyueTomcatEmbeddedServletContainerFactory() {
		super();
	}

	public ShineyueTomcatEmbeddedServletContainerFactory(int port) {
		super(port);
	}

	public ShineyueTomcatEmbeddedServletContainerFactory(String contextPath, int port) {
		super(contextPath, port);
	}

	@Override
	public EmbeddedServletContainer getEmbeddedServletContainer(ServletContextInitializer... initializers) {
		Tomcat tomcat = new Tomcat();
		File baseDir = createTempDir("tomcat");
		tomcat.setBaseDir(baseDir.getAbsolutePath());
		Connector connector = new Connector("org.apache.coyote.http11.Http11Nio2Protocol");// 把之前的nio改成了nio2
		tomcat.getService().addConnector(connector);
		customizeConnector(connector);
		customizePrivateConnector(connector);
		tomcat.setConnector(connector);
		tomcat.getHost().setAutoDeploy(false);
		tomcat.getEngine().setBackgroundProcessorDelay(-1);
		for (Connector additionalConnector : super.getAdditionalTomcatConnectors()) {
			// 注释掉加载自定义tomcat实例的代码
			// tomcat.getService().addConnector(additionalConnector);
		}
		prepareContext(tomcat.getHost(), initializers);
		return getTomcatEmbeddedServletContainer(tomcat);
	}

	protected void customizePrivateConnector(Connector connector) {
		if (connector.getProtocolHandler() instanceof AbstractProtocol) {
			customizePrivateProtocol((AbstractProtocol<?>) connector.getProtocolHandler());
		}
	}

	private void customizePrivateProtocol(AbstractProtocol<?> protocol) {
		protocol.setMaxConnections(500);
		// 在这里随便写自定义的配置
		protocol.setMaxThreads(5);

	}
}