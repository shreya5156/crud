package com.example.demo.datastore.repository;

import com.example.demo.datastore.entity.RegistrationEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRegisterRepository extends MongoRepository<RegistrationEntity, String> {

    List<RegistrationEntity> findByMobileNumber(String phNo);
}
