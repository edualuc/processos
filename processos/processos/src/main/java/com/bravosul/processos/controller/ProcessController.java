package com.bravosul.processos.controller;

import java.util.List;

import com.bravosul.processos.DTO.ProcessDTO;
import com.bravosul.processos.controller.restResponse.ProcessRestResponseDefault;
import com.bravosul.processos.service.ProcessService;

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
public class ProcessController {
  
	public static final Logger log = LoggerFactory.getLogger(ProcessController.class);

  private MultiValueMap<String, String> headers = defaultHeader();;

	@Autowired
	ProcessService ProcessService;

  private final int USER = 1;

  private boolean isAuthorized(int user) {
    return user == 1 ? true : false;
  }

	@CrossOrigin(origins = "*")
	@GetMapping(value = "/process", produces = "application/json")
	public ResponseEntity<List<ProcessDTO>> listProcess() {
    log.info("Listando process");

    // if (!isAuthorized(USER)) {
    //   return new ResponseEntity<>("Perfil não autorizado!", headers, HttpStatus.UNAUTHORIZED);
    // }
    List<ProcessDTO> process = ProcessService.list();
    
		return new ResponseEntity<>(process, headers, HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@GetMapping(value = "/process/{codProcess}", produces = "application/json")
	public ResponseEntity<ProcessRestResponseDefault> getProcess(@PathVariable("codProcess") Integer codProcess) {
    log.info("Listando process com código = {}", codProcess);

    if (!isAuthorized(USER)) {
      return new ResponseEntity<>(new ProcessRestResponseDefault(null, "Perfil não autorizado!"), headers, HttpStatus.UNAUTHORIZED);
    }

    ProcessDTO process = ProcessService.getById(new ProcessDTO(codProcess));
    
		return new ResponseEntity<>(new ProcessRestResponseDefault(process, null), headers, HttpStatus.OK);
	}
  
	@CrossOrigin(origins = "*")
  @PostMapping(value = "/process", consumes = "application/json", produces = "application/json")
	public ResponseEntity<ProcessRestResponseDefault> createProcess(@RequestBody ProcessDTO processParam) {
    log.info("Criado " + this.getClass() + " objeto = {}", processParam);

    try {
      ProcessDTO process = ProcessService.create(processParam);
      
		  return new ResponseEntity<>(new ProcessRestResponseDefault(process, null), headers, HttpStatus.CREATED);
    } catch (Exception error) {
      return new ResponseEntity<>(new ProcessRestResponseDefault(null, "Erro na criação do usuário!"), headers, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	}
	
	@CrossOrigin(origins = "*")
  @PutMapping(value = "/process/{codProcess}", produces = "application/json")
	public ResponseEntity<ProcessRestResponseDefault> setProcess(@PathVariable("codProcess") Integer codProcess, @RequestBody ProcessDTO processParam) {
    log.info("Alterado " + this.getClass() + " objeto = {}", processParam);

    try {
			processParam.setId(codProcess);

      ProcessDTO process = ProcessService.update(processParam);
      
		  return new ResponseEntity<>(new ProcessRestResponseDefault(process, null), headers, HttpStatus.OK);
    } catch (Exception error) {
      return new ResponseEntity<>(new ProcessRestResponseDefault(null, "Erro na criação do usuário!"), headers, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	}
	
	@CrossOrigin(origins = "*")
  @DeleteMapping(value = "/process/{codProcess}", produces = "application/json")
	public ResponseEntity<ProcessRestResponseDefault> deleteProcess(@PathVariable("codProcess") Integer codProcess) {
    log.info("Deletado " + this.getClass() + " objeto = {}", codProcess);

    try {
      boolean success = ProcessService.delete(new ProcessDTO(codProcess));
      
		  return new ResponseEntity<>(new ProcessRestResponseDefault(null, null, statusDelete(success)), headers, HttpStatus.OK);
    } catch (Exception error) {
      return new ResponseEntity<>(new ProcessRestResponseDefault(null, statusDelete(false)), headers, HttpStatus.INTERNAL_SERVER_ERROR);
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
