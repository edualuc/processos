package com.bravosul.processos.Entities;

public class Proccess {
  
  private String cod;
  private String title;
  private List<User> usersToOpinion;

  public String getCod() {
    return this.cod;
  }
  public void setCod(String cod) {
    this.cod = cod;
  }
  
  public String getTitle() {
    return this.title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
}
