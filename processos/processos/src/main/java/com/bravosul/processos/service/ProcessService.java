package com.bravosul.processos.service;

import java.util.ArrayList;
import java.util.List;

import com.bravosul.processos.DTO.ProcessDTO;
import com.bravosul.processos.Entities.Process;
import com.bravosul.processos.repository.ProcessRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProcessService {
  @Autowired
  public ProcessRepository repository;

  public ProcessService() {
  }

  public List<ProcessDTO> list() {
    Iterable<Process> users = repository.findAll();
    List<ProcessDTO> usersReturn = new ArrayList<ProcessDTO>();
    for (Process user : users) {
      usersReturn.add(new ProcessDTO(user));
    }
    return usersReturn;
  }

  public ProcessDTO getById(ProcessDTO userParam) {
    ProcessDTO userReturn = new ProcessDTO(repository.findById(userParam.getId().get()));
    return userReturn;
  }

  public ProcessDTO create(ProcessDTO userParam) {
    // if (!userParam.toProcess().getCod().isPresent()) {
    ProcessDTO userReturn = new ProcessDTO(repository.save(userParam.toProcess()));
    return userReturn;
  }

  public ProcessDTO update(ProcessDTO userParam) {
    // if (userParam.toProcess().getCod().isPresent()) {
    ProcessDTO userReturn = new ProcessDTO(repository.save(userParam.toProcess()));
    return userReturn;
  }

  public boolean delete(ProcessDTO userParam) {
    repository.deleteById(userParam.getId().get());
    return true;
  }
}
