package sample.tomcat.data;

import java.io.Serializable;

public class JsonObject implements Serializable {
    private static final long serialVersionUID = -6526203853383136386L;
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
