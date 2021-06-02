package com.bravosul.processos.repository;

import com.bravosul.processos.Entities.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProccessRepository extends CrudRepository<User, Integer> {

}