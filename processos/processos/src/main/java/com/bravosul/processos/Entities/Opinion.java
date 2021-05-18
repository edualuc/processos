package com.bravosul.processos.Entities;

public class Opinion {
  
  private String cod;
  private Process process;
  private User user;
  private String description;
  
  public String getCod() {
    return this.cod;
  }
  public void setCod(String cod) {
    this.cod = cod;
  }
  
  public Process getProcess() {
    return this.process;
  }
  public void setProcess(Process process) {
    this.process = process;
  }
  
  public User getUser() {
    return this.user;
  }
  public void setUser(User user) {
    this.user = user;
  }
  
  public String getDescription() {
    return this.description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
}
