package com.example.demo.datastore.repository;

import com.example.demo.datastore.entity.SellDetailsEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISellDetailsRepository extends MongoRepository<SellDetailsEntity,String> {

    SellDetailsEntity findByCategory(String category);
}
