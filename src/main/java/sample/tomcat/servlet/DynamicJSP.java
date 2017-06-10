package sample.tomcat.servlet;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.net.URLClassLoader;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.jasper.JspC;

public class DynamicJSP extends HttpServlet {

	private static final long serialVersionUID = 1L;

    // Initialize global variables
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        System.out.println("DynamicJSP init"); 
    }

	// Process the HTTP Get request
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		index(request, response);
	}


	public void index(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String msg = "";
		try {
			JspC jspc = new JspC();
			jspc.setUriroot(getServletContext().getRealPath("/jsp/"));
			jspc.setOutputDir(getServletContext().getRealPath("/jsp/"));
			jspc.setJspFiles("Date.jsp");
			jspc.setCompile(true);
			jspc.execute();
//			URL xUrl = new URI(getServletContext().getRealPath("/")+"page/").toURL();
			File filePath = new File(getServletContext().getRealPath("/jsp/"));
			URL xUrl = filePath.toURL();
			URLClassLoader loader = new URLClassLoader(new URL[] { xUrl }, Thread.currentThread().getContextClassLoader());
			Class<?> xClass = loader.loadClass("org.apache.jsp.Date_jsp");
			request.setAttribute("msg", msg);
			Servlet servlet = (Servlet) xClass.newInstance();
			servlet.init(getServletConfig());
			servlet.service((ServletRequest) request, (ServletResponse) response);
			loader.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	// Get Servlet information
	public String getServletInfo() {
		return "tw.com.javaworld.CH2.HelloSerlvet Information";
	}
}