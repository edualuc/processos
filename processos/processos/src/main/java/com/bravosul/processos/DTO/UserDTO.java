package com.bravosul.processos.DTO;

import java.io.Serializable;
import java.util.Optional;

import com.bravosul.processos.Entities.User;

public class UserDTO implements Serializable, Cloneable {
  private Optional<Integer> id;
  private Optional<String> type;
  private Optional<String> name;

  public UserDTO () {
  }
  
  public UserDTO (Integer userId) {
    this.id = Optional.ofNullable(userId);
  }
  
  public UserDTO (User userParam) {
    fromUser(userParam);
  }

  public UserDTO (Optional<User> userParam) {
    if(userParam.isPresent()) {
      User userPresent = userParam.get();
      fromUser(userPresent);
    }
  }
  
  private void fromUser(User userParam) {
    this.id = userParam.getId();
    this.type = userParam.getType();
    this.name = userParam.getName();
  }
  
  public User toUser() {
    return new User(id, type, name);
  }

  public Optional<Integer> getId() {
    return this.id;
  }
  public void setId(Integer id) {
    this.id = Optional.ofNullable(id);
  }
  
  public Optional<String> getType() {
    return this.type;
  }
  public void setType(String type) {
    this.type = Optional.ofNullable(type);
  }
  
  public Optional<String> getName() {
    return this.name;
  }
  public void setName(String name) {
    this.name = Optional.ofNullable(name);
  }
}
