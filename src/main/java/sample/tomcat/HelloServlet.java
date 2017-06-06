package sample.tomcat;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	//Initialize global variables  
	public void init(ServletConfig config) throws ServletException {
		super.init(config);
        System.out.println("HelloServlet init"); 
	}
	
	//Process the HTTP Get request  
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		response.setContentType("text/html;charset=utf8");
		PrintWriter out = response.getWriter();
		
		out.println("<html>");
		out.println("<head><title>CH2 - HelloServlet</title></head>");
		out.println("<body>");
		out.println(getClass());
        out.println("<br/>");
		out.println(" Hello World ");
        out.println("<br/>");
		out.println("</body>");
		out.println("</html>");

		out.close();
	} 
	
	//Get Servlet information 
	public String getServletInfo() {
		return "tw.com.javaworld.CH2.HelloSerlvet Information";
	}
}