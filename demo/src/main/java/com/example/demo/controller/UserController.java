package com.example.demo.controller;
import com.example.demo.datastore.entity.RegistrationEntity;
import com.example.demo.representation.*;
import com.example.demo.service.IuserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class UserController {
    private IuserService userService;

    @Autowired
    public void setUserService(IuserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody RegisterReq registerReq){
        return userService.registerUser(registerReq);
    }
    @GetMapping("getAll")
    public List<RegistrationEntity> getAllUsers(){

        return userService.getAllUsers();
    }

    @PostMapping("/readBy")
    public List<RegistrationEntity> readByPhNo(@RequestBody ReadByReq readByReq){
        return userService.readByPhNo(readByReq);
    }

    @PostMapping("/UpdateByID")
    public void updateById(@RequestBody UpdateByIdReq updateByIdReq){

        userService.updateById(updateByIdReq);
    }

    @PostMapping("/DeleteByID")
    public void deleteById(@RequestBody DeleteByIdReq deleteByIdReq){
        userService.deleteById(deleteByIdReq);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginReq loginReq){
        return userService.login(loginReq);
    }
}
