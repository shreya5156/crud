package com.example.demo.controller;

import com.example.demo.representation.AddSellDetailsByReq;
import com.example.demo.representation.RegisterReq;
import com.example.demo.service.ISellService;
import com.example.demo.service.IuserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class SellController {
    private ISellService iSellService;

    @Autowired
    public void setiSellService(ISellService iSellService) {
        this.iSellService = iSellService;
    }

    @PostMapping("/sell")
    public String registerUser(@RequestBody AddSellDetailsByReq addSellDetailsByReq){
        return iSellService.AddSellDetails(addSellDetailsByReq);
    }
}
