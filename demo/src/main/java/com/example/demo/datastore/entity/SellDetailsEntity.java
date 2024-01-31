package com.example.demo.datastore.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SellDetailsEntity {
    @Id
    private String id;
    private String category;
    private Integer numberOfClothes;
}
