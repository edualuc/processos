package com.bravosul.processos.Entities;

public class User {
  private String cod;
  private String type;
  private String name;

  public User(String cod, String type, String name) {
    this.cod = cod;
    this.type = type;
    this.name = name;
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
