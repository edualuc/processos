package com.bravosul.processos.Entities;

import java.util.List;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "process")
public class Process {
  
  @Id
  private Integer id;
  private String title;

  @ManyToOne
  // @JoinColumn(name = "created_at")
  private User createdAt;
  
  @ManyToMany
  private List<User> usersToOpinion;

  Process() {
  }

  public Process(Integer id, String title, User createdAt, List<User> usersToOpinion) {
    setAttributes(id,  title,  createdAt, usersToOpinion);
  }

  public Process(Optional<Integer> id, Optional<String> title, Optional<User> createdAt, Optional<List<User>> usersToOpinion) {
    setAttributes(
      id.orElse(null),
      title.orElse(null),
      createdAt.orElse(null),
      usersToOpinion.orElse(null));
  }

  private void setAttributes(Integer id, String title, User createdAt, List<User> usersToOpinion) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.usersToOpinion = usersToOpinion;
  }

  public Optional<Integer> getId() {
    return Optional.ofNullable(this.id);
  }
  public void setId(Integer id) {
    this.id = id;
  }
  
  public Optional<String> getTitle() {
    return Optional.ofNullable(this.title);
  }
  public void setTitle(String title) {
    this.title = title;
  }
  
  public Optional<User> getCreatedAt() {
    return Optional.ofNullable(this.createdAt);
  }
  public void setCreatedAt(User createdAt) {
    this.createdAt = createdAt;
  }
  
  public Optional<List<User>> getUsersToOpinion() {
    return Optional.ofNullable(this.usersToOpinion);
  }
  public void setUsersToOpinion(List<User> usersToOpinion) {
    this.usersToOpinion = usersToOpinion;
  }
}
