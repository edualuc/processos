package com.bravosul.processos.Entities;

import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Opinion {
  
  @Id
  private Integer id;

  @ManyToOne
  private Process process;

  @ManyToOne
  private User user;

  private String description;

  Opinion() {

  }

  public Opinion(Integer id, Process process, User user, String description) {
    setAttributes(id, process, user, description);
  }

  public Opinion(Optional<Integer> id, Optional<Process> process, Optional<User> user, Optional<String> description) {
    setAttributes(
      id.orElse(null),
      process.orElse(null),
      user.orElse(null),
      description.orElse(null));
  }

  private void setAttributes(Integer id, Process process, User user, String description) {
    this.id = id;
    this.process = process;
    this.user = user;
    this.description = description;
  }
  
  public Optional<Integer> getId() {
    return Optional.ofNullable(this.id);
  }
  public void setId(Integer id) {
    this.id = id;
  }
  
  public Optional<Process> getProcess() {
    return Optional.ofNullable(this.process);
  }
  public void setProcess(Process process) {
    this.process = process;
  }
  
  public Optional<User> getUser() {
    return Optional.ofNullable(this.user);
  }
  public void setUser(User user) {
    this.user = user;
  }
  
  public Optional<String> getDescription() {
    return Optional.ofNullable(this.description);
  }
  public void setDescription(String description) {
    this.description = description;
  }
}
