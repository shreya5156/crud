package com.example.demo.representation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterReq {
    private String lastname;
    private String firstName;
    private String phoneNo;
    private String password;
}
