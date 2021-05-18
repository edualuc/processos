package com.bravosul.processos.DTO;

import java.io.Serializable;
import java.util.Map;

import com.bravosul.processos.Entities.User;

public class UserDTO implements Serializable {
  private String cod;
  private String type;
  private String name;

  public UserDTO () {
  }
  
  public UserDTO (String userCod) {
    this.cod = userCod;
  }
  
  public UserDTO (Map<String,String> valuesUser) {
    this.cod = valuesUser.get("cod");
    this.type = valuesUser.get("type");
    this.name = valuesUser.get("name");
  }
  
  public UserDTO (User userParam) {
    this.cod = userParam.getCod();
    this.type = userParam.getType();
    this.name = userParam.getName();
  }
  
  public User toUser() {
    return new User(cod, type, name);
  }

  public String getCod() {
    return this.cod;
  }
  public void setCod(String cod) {
    this.cod = cod;
  }
  
  public String getType() {
    return this.type;
  }
  public void setType(String type) {
    this.type = type;
  }
  
  public String getName() {
    return this.name;
  }
  public void setName(String name) {
    this.name = name;
  }
}
