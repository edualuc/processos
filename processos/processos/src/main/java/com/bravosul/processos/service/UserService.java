package com.bravosul.processos.service;

import java.util.ArrayList;
import java.util.List;

import com.bravosul.processos.DTO.UserDTO;
import com.bravosul.processos.Entities.User;
// import com.bravosul.processos.Entities.User;
import com.bravosul.processos.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  public UserRepository repository;

  public UserService() {
  }

  public List<UserDTO> list() {
    Iterable<User> users = repository.findAll();
    List<UserDTO> usersReturn = new ArrayList<UserDTO>();
    for (User user : users) {
      usersReturn.add(new UserDTO(user));
    }
    return usersReturn;
  }

  public UserDTO getById(UserDTO userParam) {
    UserDTO userReturn = new UserDTO(repository.findById(userParam.getId().get()));
    return userReturn;
  }

  public UserDTO create(UserDTO userParam) {
    // if (!userParam.toUser().getCod().isPresent()) {
    UserDTO userReturn = new UserDTO(repository.save(userParam.toUser()));
    return userReturn;
  }

  public UserDTO update(UserDTO userParam) {
    // if (userParam.toUser().getCod().isPresent()) {
    UserDTO userReturn = new UserDTO(repository.save(userParam.toUser()));
    return userReturn;
  }

  public boolean delete(UserDTO userParam) {
    repository.deleteById(userParam.getId().get());
    return true;
  }
}
