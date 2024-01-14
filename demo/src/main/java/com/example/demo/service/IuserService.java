package com.example.demo.service;

import com.example.demo.datastore.entity.RegistrationEntity;
import com.example.demo.representation.DeleteByIdReq;
import com.example.demo.representation.ReadByReq;
import com.example.demo.representation.RegisterReq;
import com.example.demo.representation.UpdateByIdReq;

import java.util.List;

public interface IuserService {
    public void registerUser(RegisterReq registerReq);
    public List<RegistrationEntity> getAllUsers();
    public  List<RegistrationEntity> readByPhNo(ReadByReq readByReq);
    public void updateById(UpdateByIdReq updateByIdReq);
    public void deleteById(DeleteByIdReq deleteByIdReq);
}
