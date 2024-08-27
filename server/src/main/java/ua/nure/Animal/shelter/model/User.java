package ua.nure.Animal.shelter.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Long id; // Primary Key
    private Long roleId; // Foreign Key
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private String password;
    private Date dateOfBirth;
    private String address;
}
