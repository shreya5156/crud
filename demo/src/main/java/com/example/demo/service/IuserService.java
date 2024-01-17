package com.example.demo.service;

import com.example.demo.datastore.entity.RegistrationEntity;
import com.example.demo.representation.*;

import java.util.List;

public interface IuserService {
    public String registerUser(RegisterReq registerReq);
    public List<RegistrationEntity> getAllUsers();
    public  List<RegistrationEntity> readByPhNo(ReadByReq readByReq);
    public void updateById(UpdateByIdReq updateByIdReq);
    public void deleteById(DeleteByIdReq deleteByIdReq);
    public String login(LoginReq loginReq);
}
