package com.bravosul.processos.repository;

import com.bravosul.processos.DTO.UserDTO;

public class UserRepository extends Repository {
  private UserDTO user = new UserDTO();
  private UserDTO convert(UserDTO userParam) {
    user.setCod(userParam.getCod());
    user.setName(userParam.getName());
    user.setType(userParam.getType());
    return user;
  }
  private UserDTO convert(String userParam) {
    user.setCod(userParam);
    return user;
  }
  public UserDTO getUserByCod(String userParam) {
    return convert(userParam);
  }
  public UserDTO createUser(UserDTO userParam) {
    return convert(userParam);
  }
  public UserDTO updateUser(UserDTO userParam) {
    return convert(userParam);
  }
  public boolean deleteUser(String userParam) {
    return true;
  }
  
}

class Repository {
}