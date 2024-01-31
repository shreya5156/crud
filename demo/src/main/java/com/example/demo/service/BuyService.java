package com.example.demo.service;

import com.example.demo.datastore.entity.SellDetailsEntity;
import com.example.demo.datastore.repository.ISellDetailsRepository;
import com.example.demo.representation.GetClothesDetailsReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuyService implements IBuyService {
    private ISellDetailsRepository iSellDetailsRepository;

    @Autowired
    public void setiSellDetailsRepository(com.example.demo.datastore.repository.ISellDetailsRepository iSellDetailsRepository) {
        this.iSellDetailsRepository = iSellDetailsRepository;
    }

    @Override
    public Integer getImagesByCategory(GetClothesDetailsReq getClothesDetailsReq) {
        String category = getClothesDetailsReq.getCategory();
       SellDetailsEntity sellDetailsEntity = iSellDetailsRepository.findByCategory(category);
       if(sellDetailsEntity != null)
        return sellDetailsEntity.getNumberOfClothes();
       return 0;
    }
}
