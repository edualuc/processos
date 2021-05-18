package com.bravosul.processos.service;

import com.bravosul.processos.DTO.UserDTO;
import com.bravosul.processos.Entities.User;
import com.bravosul.processos.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class UserService {
  public UserRepository repository;

  public UserService(UserRepository repository) {
    this.repository = repository;
  }

  public UserDTO getUserByCod(UserDTO userParam) {
    User user = repository.getUserByCod(userParam.getCod()).toUser();
    UserDTO userReturn = new UserDTO(user);
    return userReturn;
  }

  public UserDTO createUser(UserDTO userParam) {
    User user = repository.createUser(userParam).toUser();
    UserDTO userReturn = new UserDTO(user);
    return userReturn;
  }

  public UserDTO updateUser(UserDTO userParam) {
    User user = repository.updateUser(userParam).toUser();
    UserDTO userReturn = new UserDTO(user);
    return userReturn;
  }

  public boolean deleteUser(UserDTO userParam) {
    boolean isDeleted = repository.deleteUser(userParam.getCod());
    return isDeleted;
  }
}
