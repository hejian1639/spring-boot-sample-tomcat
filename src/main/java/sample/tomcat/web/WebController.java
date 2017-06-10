package sample.tomcat.web;

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
		return "static/pages/index.html";
	}

}
