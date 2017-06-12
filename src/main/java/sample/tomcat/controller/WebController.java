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

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index() {
		return "h5/pages/index.html";
	}

	@RequestMapping({ "/restful_test" })
	public String restfulTest() {
		return "jsp/restful.jsp";
	}

	@RequestMapping({ "/jersey_service_test" })
	public String jerseyServiceTest() {
		return "h5/jersey_service_test.html";
	}

	@RequestMapping({ "/service_test" })
	public String serviceTest() {
		return "h5/service_test.html";
	}
	
}
