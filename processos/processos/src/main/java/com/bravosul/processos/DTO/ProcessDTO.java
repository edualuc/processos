package com.bravosul.processos.DTO;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import com.bravosul.processos.Entities.Process;
import com.bravosul.processos.Entities.User;

public class ProcessDTO implements Serializable, Cloneable {
  private Optional<Integer> id;
  private Optional<String> title;
  private Optional<User> createdAt;
  private Optional<List<User>> usersToOpinion;

  public ProcessDTO () {
  }
  
  public ProcessDTO (Integer processId) {
    setId(processId);
  }
  
  public ProcessDTO (Integer processId, String title, User createdAt, List<User> usersToOpinion) {
    setId(processId);
    setTitle(title);
    setCreatedAt(createdAt);
    setUsersToOpinion(usersToOpinion);
  }
  
  public ProcessDTO (Process processParam) {
    fromProcess(processParam);
  }

  public ProcessDTO (Optional<Process> processParam) {
    if(processParam.isPresent()) {
      Process processPresent = processParam.get();
      fromProcess(processPresent);
    }
  }
  
  private void fromProcess(Process processParam) {
    this.id = processParam.getId();
    this.title = processParam.getTitle();
    this.createdAt = processParam.getCreatedAt();
    this.usersToOpinion = processParam.getUsersToOpinion();
  }
  
  public Process toProcess() {
    return new Process(id, title, createdAt, usersToOpinion);
  }

  public Optional<Integer> getId() {
    return this.id;
  }
  public void setId(Integer id) {
    this.id = Optional.ofNullable(id);
  }
  
  public Optional<String> getTitle() {
    return this.title;
  }
  public void setTitle(String title) {
    this.title = Optional.ofNullable(title);
  }
  
  public Optional<User> getCreatedAt() {
    return this.createdAt;
  }
  public void setCreatedAt(User createdAt) {
    this.createdAt = Optional.ofNullable(createdAt);
  }
  
  public Optional<List<User>> getUsersToOpinion() {
    return this.usersToOpinion;
  }
  public void setUsersToOpinion(List<User> usersToOpinion) {
    this.usersToOpinion = Optional.ofNullable(usersToOpinion);
  }

  @Override
  public String toString() {
    return "ProcessDTO:" + id + " | " + createdAt.toString() + " | " + title;
  }
}
