package sample.tomcat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {

	@RequestMapping({ "/" })
	public String root() {
		
		return "index.html";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "h5/login.html";
	}

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index() {
		return "h5/pages/index.html";
	}

	@RequestMapping(value = "/image", method = RequestMethod.GET)
	public String image() {
		return "h5/image.html";
	}
	
	
	@RequestMapping({ "/date" })
	public String date() {
		return "jsp/Date.jsp";
	}

	@RequestMapping({ "/restful_test" })
	public String restfulTest() {
		return "h5/restful.html";
	}

	@RequestMapping({ "/jersey_service_test" })
	public String jerseyServiceTest() {
		return "h5/jersey_service_test.html";
	}

	@RequestMapping({ "/service_test" })
	public String serviceTest() {
		return "h5/service_test.html";
	}

	@RequestMapping({ "/websocket_test" })
	public String websocketTest() {
		return "h5/echo.html";
	}
	
	@RequestMapping(value = "/react_demo/**", method = RequestMethod.GET)
	public String react() {
		return "react_demo/index.html";
	}

}
