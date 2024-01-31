package com.example.demo.service;

import com.example.demo.datastore.entity.RegistrationEntity;
import com.example.demo.datastore.entity.SellDetailsEntity;
import com.example.demo.datastore.repository.IRegisterRepository;
import com.example.demo.datastore.repository.ISellDetailsRepository;
import com.example.demo.representation.AddSellDetailsByReq;
import com.example.demo.representation.RegisterReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellService implements ISellService {
    private ISellDetailsRepository iSellDetailsRepository;

    @Autowired
    public void setiSellDetailsRepository(ISellDetailsRepository iSellDetailsRepository) {
        this.iSellDetailsRepository = iSellDetailsRepository;
    }

    public String AddSellDetails(AddSellDetailsByReq addSellDetailsByReq) {
        String category = addSellDetailsByReq.getCategory();
        SellDetailsEntity sellDetailsEntity = iSellDetailsRepository.findByCategory(category);
        if (sellDetailsEntity == null) {
            sellDetailsEntity = new SellDetailsEntity();
            sellDetailsEntity.setCategory(addSellDetailsByReq.getCategory());
            sellDetailsEntity.setNumberOfClothes(addSellDetailsByReq.getNumberOfClothes());
        } else {
            sellDetailsEntity.setNumberOfClothes(sellDetailsEntity.getNumberOfClothes() + addSellDetailsByReq.getNumberOfClothes());

        }
        iSellDetailsRepository.save(sellDetailsEntity);
        return "Success";
    }
}
