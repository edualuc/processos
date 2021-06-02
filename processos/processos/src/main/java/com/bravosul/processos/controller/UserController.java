package com.bravosul.processos.controller;

import java.util.List;

import com.bravosul.processos.DTO.UserDTO;
import com.bravosul.processos.controller.restResponse.RestResponseDefault;
import com.bravosul.processos.service.UserService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
  
	public static final Logger log = LoggerFactory.getLogger(UserController.class);

  private MultiValueMap<String, String> headers = defaultHeader();;

	@Autowired
	UserService UserService;

  private final int USER = 1;

  private boolean isAuthorized(int user) {
    return user == 1 ? true : false;
  }

	@CrossOrigin(origins = "*")
	@GetMapping(value = "/users", produces = "application/json")
	public ResponseEntity<List<UserDTO>> listUser() {
    log.info("Listando users");

    // if (!isAuthorized(USER)) {
    //   return new ResponseEntity<>("Perfil não autorizado!", headers, HttpStatus.UNAUTHORIZED);
    // }
    List<UserDTO> users = UserService.list();
    
		return new ResponseEntity<>(users, headers, HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@GetMapping(value = "/users/{codUser}", produces = "application/json")
	public ResponseEntity<RestResponseDefault> getUser(@PathVariable("codUser") Integer codUser) {
    log.info("Listando users com código = {}", codUser);

    if (!isAuthorized(USER)) {
      return new ResponseEntity<>(new RestResponseDefault(null, "Perfil não autorizado!"), headers, HttpStatus.UNAUTHORIZED);
    }

    UserDTO user = UserService.getById(new UserDTO(codUser));
    
		return new ResponseEntity<>(new RestResponseDefault(user, null), headers, HttpStatus.OK);
	}
  
	@CrossOrigin(origins = "*")
  @PostMapping(value = "/users", consumes = "application/json", produces = "application/json")
	public ResponseEntity<RestResponseDefault> createUser(@RequestBody UserDTO userParam) {
    log.info("Criado " + this.getClass() + " objeto = {}", userParam);

    try {
      UserDTO user = UserService.create(userParam);
      
		  return new ResponseEntity<>(new RestResponseDefault(user, null), headers, HttpStatus.CREATED);
    } catch (Exception error) {
      return new ResponseEntity<>(new RestResponseDefault(null, "Erro na criação do usuário!"), headers, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	}
	
	@CrossOrigin(origins = "*")
  @PutMapping(value = "/users/{codUser}", produces = "application/json")
	public ResponseEntity<RestResponseDefault> setUser(@PathVariable("codUser") Integer codUser, @RequestBody UserDTO userParam) {
    log.info("Criado " + this.getClass() + " objeto = {}", userParam);

    try {
			userParam.setId(codUser);

      UserDTO user = UserService.update(userParam);
      
		  return new ResponseEntity<>(new RestResponseDefault(user, null), headers, HttpStatus.OK);
    } catch (Exception error) {
      return new ResponseEntity<>(new RestResponseDefault(null, "Erro na criação do usuário!"), headers, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	}
	
	@CrossOrigin(origins = "*")
  @DeleteMapping(value = "/users/{codUser}", produces = "application/json")
	public ResponseEntity<RestResponseDefault> deleteUser(@PathVariable("codUser") Integer codUser) {
    log.info("Criado " + this.getClass() + " objeto = {}", codUser);

    try {
      boolean success = UserService.delete(new UserDTO(codUser));
      
		  return new ResponseEntity<>(new RestResponseDefault(null, null, statusDelete(success)), headers, HttpStatus.OK);
    } catch (Exception error) {
      return new ResponseEntity<>(new RestResponseDefault(null, statusDelete(false)), headers, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	}

  private MultiValueMap<String, String> defaultHeader() {
    MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
    // headers.add("Access-Control-Allow-Origin", "*");
    return headers;
  }

	private String statusDelete(boolean success) {
		if (success) {
			return "Deletado com successo";
		}
		return "Erro ao deletar";
	}

}

// @RequestHeader("Authorization") String authorization,
// @RequestBody(required = false) String requestBody,
// @RequestParam(value = "name", defaultValue = "World") String name