package sample.tomcat.controller;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Context;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sample.tomcat.data.Account;
import sample.tomcat.data.City;
import sample.tomcat.data.JsonObject;
import sample.tomcat.data.Person;
import sample.tomcat.service.AccountService;
import sample.tomcat.service.MybatisService;

@RestController
@RequestMapping("/service")
public class ServiceController {
	Map<Integer, JsonObject> objectMap = new ConcurrentHashMap<Integer, JsonObject>();

	@Resource
	private MybatisService mybatisService;

	@Resource
	private AccountService accountService;

//    @Context
//    private HttpServletRequest request;
	
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String getHello() {
		return "Hello World";
	}
	
	@RequestMapping(value = "/login/{username}/{password}", method = RequestMethod.GET)
	public String login(@PathVariable final String username, @PathVariable final String password, HttpServletRequest request) throws Exception {
        System.out.println("login request: " + username);
        HttpSession session = request.getSession(true);
        return session.getId();
	}
	
	@RequestMapping(value = "/city/{state}", method = RequestMethod.GET)
	public City getCity(@PathVariable final String state) {
		return mybatisService.getCity(state);
	}

	@RequestMapping(value = "/city", method = RequestMethod.POST, consumes = "application/json")
	public void addCity(@RequestBody City city) {
		 mybatisService.insertCity(city);
	}
	
	@RequestMapping(value = "/account/{username}", method = RequestMethod.GET)
	@ResponseBody
	public Account getAccount(@PathVariable final String username) throws Exception {
        System.out.println("get account request: " + username);
		return accountService.getAccount(username);
	}

    @RequestMapping(value = "/account", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public void postAccount(@RequestBody Account account) throws Exception {
        System.out.println("insert account: " + account.getUsername());

        accountService.insertAccount(account);
        
    }

//    @RequestMapping(value = "/account/{username}", method = RequestMethod.DELETE)
//    @ResponseBody
//    public void deleteAccount(@PathVariable final String username) {
//        System.out.println("delete account request: " + username);
//
//        accountService.deleteAccount(username);
//        
//    }
	
	@RequestMapping(value = "/object/{id}", method = RequestMethod.GET)
	public JsonObject getObject(@PathVariable final int id) {
		System.out.println("getObject " + this);
		JsonObject object = objectMap.get(id);
		return object;
	}

	@RequestMapping(value = "/urlTest/**", method = RequestMethod.GET)
	
	public String urlTest(HttpServletRequest request) {
		System.out.println("getRequestURL = " + request.getRequestURL());
		System.out.println("getRequestURI = " + request.getRequestURI());
		return "ok";
	}

	@RequestMapping(value = "/bars/{numericId:[\\d]+}")
	
	public String getBarsBySimplePathWithPathVariable(
			@PathVariable final long numericId) {
		return "Get a specific Bar with id=" + numericId;
	}

	@RequestMapping(value = "/bars/{str:[\\s/]+}")
	
	public String getBarsBySimplePathWithPathVariable(
			@PathVariable final String str) {
		return "Get a specific Bar with id=" + str;
	}

	@RequestMapping(value = "/object", method = RequestMethod.POST, consumes = "application/json")
	
	public void postObject(@RequestBody JsonObject json) {
		System.out.println("postObject " + this);

		objectMap.put(json.getId(), json);
	}

	@RequestMapping(value = "/object", method = RequestMethod.PUT, consumes = "application/json")
	
	public void putObject(@RequestBody JsonObject json) {
		System.out.println("putObject " + this);
		objectMap.put(json.getId(), json);
	}

	@RequestMapping(value = "/object/{id}", method = RequestMethod.DELETE)
	
	public void deleteObject(@PathVariable final int id) {
		System.out.println("postObject " + this);
		objectMap.remove(id);
	}

	@RequestMapping(value = "/service", method = RequestMethod.GET)
	
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
	
	public JsonObject springPostService(@RequestBody JsonObject json) {
		return json;
	}

	@RequestMapping(value = "/spring_post_string_service", method = RequestMethod.POST)
	
	public String springPostService(@RequestBody String json) {
		return json;
	}

	@RequestMapping(value = "/spring_get_boolean_service")
	
	public Boolean springPostService() {
		return true;
	}

	@RequestMapping(value = "/convert", produces = { "application/x-wisely" }, method = RequestMethod.POST)
	
	public Person convert(@RequestBody Person person) {
		return person;
	}

	@RequestMapping(value = "/throwException", method = RequestMethod.GET)
	
	public void throwException() {
		throw new RuntimeException();
	}

	@RequestMapping(value = "/throwNullPointerException", method = RequestMethod.GET)
	
	public void throwNullPointerException() {
		throw new NullPointerException();
	}

	@ExceptionHandler(Exception.class)
	
	public Exception handleError(HttpServletRequest req, Exception exception) {

		exception.printStackTrace();
		return exception;
	}

}
