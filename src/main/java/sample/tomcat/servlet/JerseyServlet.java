package sample.tomcat.servlet;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.stereotype.Controller;

import com.alibaba.fastjson.JSON;

@Controller
@Singleton
@Path("/")
@Produces({MediaType.APPLICATION_JSON, MediaType.TEXT_HTML})
@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_FORM_URLENCODED })
public class JerseyServlet {

    Map<Integer, JsonObject> objectMap = new ConcurrentHashMap<Integer, JsonObject>(); 
    
    public JerseyServlet(){
        super();
    }
    
	@GET
	@Path("/getQuery")
	public String getQuery(@DefaultValue("1") @QueryParam("integer") final Integer integer, @DefaultValue("hello")@QueryParam("string") final String string) {
        System.out.print("getQuery ");
        System.out.println(this);
		Map<String, Object> map = new HashMap<String, Object>() {
			private static final long serialVersionUID = -3258778397073416958L;
			{
				put("integer", integer);
				put("string", string);
			}
		};
		return JSON.toJSONString(map);
	}

	@GET
	@Path("/object/{id}")
    @Produces({ MediaType.APPLICATION_JSON })
	public JsonObject getObject(@PathParam("id") final int id) {
        System.out.println("getObject " + this);

        JsonObject object = objectMap.get(id);
		return object;
	}

	@POST
    @Path("/object")
    @Consumes({ MediaType.APPLICATION_JSON })
    public void postObject(JsonObject json) {
        System.out.println("postObject " + this);

	    objectMap.put(json.getId(), json);
    }
	

    @PUT
    @Path("/object")
    @Consumes({ MediaType.APPLICATION_JSON })
    public void putObject(JsonObject json) {
        System.out.println("putObject " + this);
        objectMap.put(json.getId(), json);
    }

    @DELETE
    @Path("/object/{id}")
    public void deleteObject(@PathParam("id") final int id) {
        System.out.println("postObject " + this);

        objectMap.remove(id);
    }
    
	@XmlRootElement
	@Consumes({ "application/xml", "application/json" })
	static public class JsonObject {
        private Integer id;
	    private String name;
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
        public Integer getId() {
            return id;
        }
        public void setId(Integer id) {
            this.id = id;
        }
	}	
	
	@POST
	@Path("/postJson")
    @Consumes({ MediaType.APPLICATION_JSON })
    @Produces({ MediaType.APPLICATION_JSON })
	public JsonObject postJson(JsonObject json){
		return json;
	}
	
    @POST
    @Path("/postJsonGetHtml")
    @Consumes({ MediaType.APPLICATION_JSON })
    @Produces({ MediaType.TEXT_HTML })
    public String postJsonGetHtml(JsonObject json){
        System.out.print("postJsonGetHtml ");
        System.out.println(this);
        return JSON.toJSONString(json);
    }

    @POST
	@Path("/postForm")
	public String postForm(@FormParam("integer") final Integer integer, @FormParam("string") final String string) {
        System.out.print("postForm ");
        System.out.println(this);
		Map<String, Object> map = new HashMap<String, Object>() {
			private static final long serialVersionUID = -3258778397073416958L;
			{
				put("integer", integer);
				put("string", string);
			}
		};
		return JSON.toJSONString(map);
	}
	
    
    @GET
    @Path("/throwException")
    public void throwException() {
        throw new NullPointerException();
    }
    
}
