package com.example.demo.controller;

import com.example.demo.representation.GetClothesDetailsReq;
import com.example.demo.service.IBuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class BuyController {

    private IBuyService iBuyService;
    @Autowired
    public void setiBuyService(IBuyService iBuyService)
    {
        this.iBuyService = iBuyService;
    }

    @PostMapping("/buy")
    public Integer GetImages(@RequestBody GetClothesDetailsReq getClothesDetailsReq)
    {
        return iBuyService.getImagesByCategory(getClothesDetailsReq);
    }

}
