package sample.tomcat.controller;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import sample.tomcat.data.City;
import sample.tomcat.data.JsonObject;
import sample.tomcat.data.Person;
import sample.tomcat.service.MybatisService;

@Controller
@RequestMapping("/service")
public class ServiceController {
	Map<Integer, JsonObject> objectMap = new ConcurrentHashMap<Integer, JsonObject>();

	@Resource
	private MybatisService mybatisService;

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	@ResponseBody
	public String getHello() {
		return "Hello World";
	}
	
	@RequestMapping(value = "/city/{state}", method = RequestMethod.GET)
	@ResponseBody
	public City getCity(@PathVariable final String state) {
		return mybatisService.getCity(state);
	}
	
	@RequestMapping(value = "/object/{id}", method = RequestMethod.GET)
	@ResponseBody
	public JsonObject getObject(@PathVariable final int id) {
		System.out.println("getObject " + this);
		JsonObject object = objectMap.get(id);
		return object;
	}

	@RequestMapping(value = "/urlTest/**", method = RequestMethod.GET)
	@ResponseBody
	public String urlTest(HttpServletRequest request) {
		System.out.println("getRequestURL = " + request.getRequestURL());
		System.out.println("getRequestURI = " + request.getRequestURI());
		return "ok";
	}

	@RequestMapping(value = "/bars/{numericId:[\\d]+}")
	@ResponseBody
	public String getBarsBySimplePathWithPathVariable(
			@PathVariable final long numericId) {
		return "Get a specific Bar with id=" + numericId;
	}

	@RequestMapping(value = "/bars/{str:[\\s/]+}")
	@ResponseBody
	public String getBarsBySimplePathWithPathVariable(
			@PathVariable final String str) {
		return "Get a specific Bar with id=" + str;
	}

	@RequestMapping(value = "/object", method = RequestMethod.POST, consumes = "application/json")
	@ResponseBody
	public void postObject(@RequestBody JsonObject json) {
		System.out.println("postObject " + this);

		objectMap.put(json.getId(), json);
	}

	@RequestMapping(value = "/object", method = RequestMethod.PUT, consumes = "application/json")
	@ResponseBody
	public void putObject(@RequestBody JsonObject json) {
		System.out.println("putObject " + this);
		objectMap.put(json.getId(), json);
	}

	@RequestMapping(value = "/object/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteObject(@PathVariable final int id) {
		System.out.println("postObject " + this);
		objectMap.remove(id);
	}

	@RequestMapping(value = "/service", method = RequestMethod.GET)
	@ResponseBody
	public String service() {
		return "spring web service";
	}

	@RequestMapping(value = "/pets/{petId}", method = RequestMethod.GET)
	public void findPet(@PathVariable String petId) {
	}

	@RequestMapping(value = "/departments")
	public String findDepatment(
			@RequestParam("departmentId") String departmentId) {

		System.out.println("Find department with ID: " + departmentId);
		return "someResult";

	}

	@RequestMapping(value = "/{textualPart:[a-z-]+}.{numericPart:[\\d]+}")
	public String regularExpression(@PathVariable String textualPart,
			@PathVariable String numericPart) {

		System.out.println("Textual part: " + textualPart + ", numeric part: "
				+ numericPart);
		return "someResult";
	}

	@RequestMapping(value = "/spring_post_service", method = RequestMethod.POST, consumes = "application/json")
	@ResponseBody
	public JsonObject springPostService(@RequestBody JsonObject json) {
		return json;
	}

	@RequestMapping(value = "/spring_post_string_service", method = RequestMethod.POST)
	@ResponseBody
	public String springPostService(@RequestBody String json) {
		return json;
	}

	@RequestMapping(value = "/spring_get_boolean_service")
	@ResponseBody
	public Boolean springPostService() {
		return true;
	}

	@RequestMapping(value = "/convert", produces = { "application/x-wisely" }, method = RequestMethod.POST)
	@ResponseBody
	public Person convert(@RequestBody Person person) {
		return person;
	}

	@RequestMapping(value = "/throwException", method = RequestMethod.GET)
	@ResponseBody
	public void throwException() {
		throw new RuntimeException();
	}

	@RequestMapping(value = "/throwNullPointerException", method = RequestMethod.GET)
	@ResponseBody
	public void throwNullPointerException() {
		throw new NullPointerException();
	}

	@ExceptionHandler(Exception.class)
	@ResponseBody
	public Exception handleError(HttpServletRequest req, Exception exception) {

		exception.printStackTrace();
		return exception;
	}

}
