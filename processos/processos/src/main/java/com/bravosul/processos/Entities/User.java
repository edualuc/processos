package com.bravosul.processos.Entities;

import java.util.List;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

  @Id
  private Integer id;
  private String type;
  private String name;

  @OneToMany(mappedBy = "createdAt")
  private List<Process> proccess;

  User() {
  }

  public User(Integer id, String type, String name) {
    this.id = id;
    this.type = type;
    this.name = name;
  }

  public User(Optional<Integer> id, Optional<String> type, Optional<String> name) {
    this.id = id.orElse(null);
    this.type = type.orElse(null);
    this.name = name.orElse(null);
  }

  public Optional<Integer> getId() {
    return Optional.ofNullable(this.id);
  }
  public void setId(Integer id) {
    this.id = id;
  }
  
  public Optional<String> getType() {
    return Optional.ofNullable(this.type);
  }
  public void setType(String type) {
    this.type = type;
  }
  
  public Optional<String> getName() {
    return Optional.ofNullable(this.name);
  }
  public void setName(String name) {
    this.name = name;
  }
}
