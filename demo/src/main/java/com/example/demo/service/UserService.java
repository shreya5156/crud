package com.example.demo.service;
import com.example.demo.datastore.entity.RegistrationEntity;
import com.example.demo.datastore.repository.IRegisterRepository;
import com.example.demo.representation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IuserService{
    private IRegisterRepository registerRepository;

    @Autowired
    public void setRegisterRepository(IRegisterRepository registerRepository) {
        this.registerRepository = registerRepository;
    }

    public String registerUser(RegisterReq registerReq){
        String phNo = registerReq.getPhoneNo();
        RegistrationEntity registrationEntity = registerRepository.findByMobileNumber(phNo);
        if(registrationEntity==null){
            RegistrationEntity registrationEntity1 = new RegistrationEntity();
            registrationEntity1.setId(registerReq.getId());
            registrationEntity1.setName(registerReq.getFirstName());
            registrationEntity1.setMobileNumber(registerReq.getPhoneNo());
            registrationEntity1.setPassword(registerReq.getPassword());
            registerRepository.save(registrationEntity1);
            return "New User Registered";
        }
        return "User already exists";
    }

    public List<RegistrationEntity> getAllUsers(){
      //   return  registerRepository.findByName("sheyu");
       return registerRepository.findAll();
    }

    @Override
    public List<RegistrationEntity> readByPhNo(ReadByReq readByReq) {
        //return registerRepository.findByMobileNumber(readByReq.getPhoneNo());
        return null;
    }

    @Override
    public void updateById(UpdateByIdReq updateByIdReq) {

        String id = updateByIdReq.getId();
        RegistrationEntity reg = registerRepository.findById(id).get();
        reg.setName(updateByIdReq.getName());
        registerRepository.save(reg);
    }

    @Override
    public void deleteById(DeleteByIdReq deleteByIdReq) {
        String id = deleteByIdReq.getId();
        // deleteing entity
        registerRepository.deleteById(id);
    }

    @Override
    public String login(LoginReq loginReq) {
        String phNo = loginReq.getPhNo();
        RegistrationEntity registrationEntity1 = registerRepository.findByMobileNumber(phNo);
        if(registrationEntity1.getPassword().equals(loginReq.getPwd()))
            return "Login successful";
        return "Please register";
    }
}
