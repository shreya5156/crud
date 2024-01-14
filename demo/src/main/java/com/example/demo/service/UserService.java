package com.example.demo.service;
import com.example.demo.datastore.entity.RegistrationEntity;
import com.example.demo.datastore.repository.IRegisterRepository;
import com.example.demo.representation.DeleteByIdReq;
import com.example.demo.representation.ReadByReq;
import com.example.demo.representation.RegisterReq;
import com.example.demo.representation.UpdateByIdReq;
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

    public void registerUser(RegisterReq registerReq){
        RegistrationEntity registrationEntity1 = new RegistrationEntity();
        registrationEntity1.setId(registerReq.getId());
        registrationEntity1.setName(registerReq.getFirstName());
        registrationEntity1.setMobileNumber(registerReq.getPhoneNo());
        registrationEntity1.setPassword(registerReq.getPassword());
        registerRepository.save(registrationEntity1);
    }

    public List<RegistrationEntity> getAllUsers(){
      //   return  registerRepository.findByName("sheyu");
       return registerRepository.findAll();
    }

    @Override
    public List<RegistrationEntity> readByPhNo(ReadByReq readByReq) {
        return registerRepository.findByMobileNumber(readByReq.getPhoneNo());
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
}
