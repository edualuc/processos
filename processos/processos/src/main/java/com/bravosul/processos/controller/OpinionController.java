package com.bravosul.processos.controller;

import java.util.List;

import com.bravosul.processos.DTO.OpinionDTO;
import com.bravosul.processos.controller.restResponse.OpinionRestResponseDefault;
import com.bravosul.processos.service.OpinionService;

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
public class OpinionController {
  
	public static final Logger log = LoggerFactory.getLogger(OpinionController.class);

  private MultiValueMap<String, String> headers = defaultHeader();;

	@Autowired
	OpinionService OpinionService;

  private final int USER = 1;

  private boolean isAuthorized(int user) {
    return user == 1 ? true : false;
  }

	@CrossOrigin(origins = "*")
	@GetMapping(value = "/opinion", produces = "application/json")
	public ResponseEntity<List<OpinionDTO>> listOpinion() {
    log.info("Listando opinion");

    // if (!isAuthorized(USER)) {
    //   return new ResponseEntity<>("Perfil não autorizado!", headers, HttpStatus.UNAUTHORIZED);
    // }
    List<OpinionDTO> opinion = OpinionService.list();
    
		return new ResponseEntity<>(opinion, headers, HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@GetMapping(value = "/opinion/{codOpinion}", produces = "application/json")
	public ResponseEntity<OpinionRestResponseDefault> getOpinion(@PathVariable("codOpinion") Integer codOpinion) {
    log.info("Listando opinion com código = {}", codOpinion);

    if (!isAuthorized(USER)) {
      return new ResponseEntity<>(new OpinionRestResponseDefault(null, "Perfil não autorizado!"), headers, HttpStatus.UNAUTHORIZED);
    }

    OpinionDTO opinion = OpinionService.getById(new OpinionDTO(codOpinion));
    
		return new ResponseEntity<>(new OpinionRestResponseDefault(opinion, null), headers, HttpStatus.OK);
	}
  
	@CrossOrigin(origins = "*")
  @PostMapping(value = "/opinion", consumes = "application/json", produces = "application/json")
	public ResponseEntity<OpinionRestResponseDefault> createOpinion(@RequestBody OpinionDTO opinionParam) {
    log.info("Criado " + this.getClass() + " objeto = {}", opinionParam);

    try {
      OpinionDTO opinion = OpinionService.create(opinionParam);
      
		  return new ResponseEntity<>(new OpinionRestResponseDefault(opinion, null), headers, HttpStatus.CREATED);
    } catch (Exception error) {
      return new ResponseEntity<>(new OpinionRestResponseDefault(null, "Erro na criação do usuário!"), headers, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	}
	
	@CrossOrigin(origins = "*")
  @PutMapping(value = "/opinion/{codOpinion}", produces = "application/json")
	public ResponseEntity<OpinionRestResponseDefault> setOpinion(@PathVariable("codOpinion") Integer codOpinion, @RequestBody OpinionDTO opinionParam) {
    log.info("Alterado " + this.getClass() + " objeto = {}", opinionParam);

    try {
			opinionParam.setId(codOpinion);

      OpinionDTO opinion = OpinionService.update(opinionParam);
      
		  return new ResponseEntity<>(new OpinionRestResponseDefault(opinion, null), headers, HttpStatus.OK);
    } catch (Exception error) {
      return new ResponseEntity<>(new OpinionRestResponseDefault(null, "Erro na criação do usuário!"), headers, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	}
	
	@CrossOrigin(origins = "*")
  @DeleteMapping(value = "/opinion/{codOpinion}", produces = "application/json")
	public ResponseEntity<OpinionRestResponseDefault> deleteOpinion(@PathVariable("codOpinion") Integer codOpinion) {
    log.info("Deletado " + this.getClass() + " objeto = {}", codOpinion);

    try {
      boolean success = OpinionService.delete(new OpinionDTO(codOpinion));
      
		  return new ResponseEntity<>(new OpinionRestResponseDefault(null, null, statusDelete(success)), headers, HttpStatus.OK);
    } catch (Exception error) {
      return new ResponseEntity<>(new OpinionRestResponseDefault(null, statusDelete(false)), headers, HttpStatus.INTERNAL_SERVER_ERROR);
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
