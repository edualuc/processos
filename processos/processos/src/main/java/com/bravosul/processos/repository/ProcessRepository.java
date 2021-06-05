package com.bravosul.processos.repository;

import com.bravosul.processos.Entities.Process;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProcessRepository extends CrudRepository<Process, Integer> {

}