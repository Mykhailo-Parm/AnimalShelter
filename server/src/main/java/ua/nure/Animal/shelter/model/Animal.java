package ua.nure.Animal.shelter.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Animal {
    private Long id; // Primary Key
    private String name;
    private String species;
    private String description;
    private Date dateOfBirth;
    private String photoUrl;
}
