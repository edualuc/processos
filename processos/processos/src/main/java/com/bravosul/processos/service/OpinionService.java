package com.bravosul.processos.service;

import java.util.ArrayList;
import java.util.List;

import com.bravosul.processos.DTO.OpinionDTO;
import com.bravosul.processos.Entities.Opinion;
import com.bravosul.processos.repository.OpinionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OpinionService {
  @Autowired
  public OpinionRepository repository;

  public OpinionService() {
  }

  public List<OpinionDTO> list() {
    Iterable<Opinion> opinions = repository.findAll();
    List<OpinionDTO> opinionsReturn = new ArrayList<OpinionDTO>();
    for (Opinion opinion : opinions) {
      opinionsReturn.add(new OpinionDTO(opinion));
    }
    return opinionsReturn;
  }

  public OpinionDTO getById(OpinionDTO opinionParam) {
    OpinionDTO opinionReturn = new OpinionDTO(repository.findById(opinionParam.getId().get()));
    return opinionReturn;
  }

  public OpinionDTO create(OpinionDTO opinionParam) {
    // if (!opinionParam.toOpinion().getCod().isPresent()) {
    OpinionDTO opinionReturn = new OpinionDTO(repository.save(opinionParam.toOpinion()));
    return opinionReturn;
  }

  public OpinionDTO update(OpinionDTO opinionParam) {
    // if (opinionParam.toOpinion().getCod().isPresent()) {
    OpinionDTO opinionReturn = new OpinionDTO(repository.save(opinionParam.toOpinion()));
    return opinionReturn;
  }

  public boolean delete(OpinionDTO opinionParam) {
    repository.deleteById(opinionParam.getId().get());
    return true;
  }
}
