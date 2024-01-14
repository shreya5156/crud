package com.example.demo.datastore.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationEntity {
    @Id
    private String id;
    private String name;
    private String mobileNumber;
    private String password;
}
