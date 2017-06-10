package sample.tomcat.servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.Globals;

public class DefaultServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	// Initialize global variables
	public void init(ServletConfig config) throws ServletException {
		super.init(config);
		System.out.println("DefaultServlet init");
	}

	// Process the HTTP Get request
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		getServletContext().getAttribute(Globals.RESOURCES_ATTR);

		String path = request.getPathInfo() == null ? "\\" : request.getPathInfo();
		// String path = getRelativePath(request, false);
		File downloadFile = new File("C:\\Users\\John\\Desktop\\Apache24\\htdocs" + path);
		if (downloadFile.isDirectory()) {
			downloadFile = new File("C:\\Users\\John\\Desktop\\Apache24\\htdocs" + path + "index.html");

		}
		OutputStream output = null;
		String contentType = Files.probeContentType(downloadFile.toPath());
		if (contentType == null) {
			contentType = getServletContext().getMimeType(downloadFile.getName());
		}
		response.setContentType(contentType);
		output = response.getOutputStream();
		getFile(downloadFile.getAbsolutePath(), output);

		// doPost(request, response);
	}

	protected String getRelativePath(HttpServletRequest request, boolean allowEmptyPath) {
		// IMPORTANT: DefaultServlet can be mapped to '/' or '/path/*' but
		// always
		// serves resources from the web app root with context rooted paths.
		// i.e. it cannot be used to mount the web app root under a sub-path
		// This method must construct a complete context rooted path, although
		// subclasses can change this behaviour.

		String servletPath;
		String pathInfo;

		if (request.getAttribute(RequestDispatcher.INCLUDE_REQUEST_URI) != null) {
			// For includes, get the info from the attributes
			pathInfo = (String) request.getAttribute(RequestDispatcher.INCLUDE_PATH_INFO);
			servletPath = (String) request.getAttribute(RequestDispatcher.INCLUDE_SERVLET_PATH);
		} else {
			pathInfo = request.getPathInfo();
			servletPath = request.getServletPath();
		}

		StringBuilder result = new StringBuilder();
		if (servletPath.length() > 0) {
			result.append(servletPath);
		}
		if (pathInfo != null) {
			result.append(pathInfo);
		}
		if (result.length() == 0 && !allowEmptyPath) {
			result.append('/');
		}

		return result.toString();
	}

	public static void getFile(String path, OutputStream out) throws IOException {
		File file = new File(path);
		FileInputStream in = null;
		try {
			in = new FileInputStream(file);
			byte[] buf = new byte[1024 * 1024];
			int length = 0;
			while ((length = in.read(buf)) != -1) {
				out.write(buf, 0, length);
			}
		} finally {
			if (in != null) {
				in.close();
			}
		}
	}


}