package ua.nure.Animal.shelter.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Application {
    private Long id; // Primary Key
    private Long userId; // Foreign Key
    private Long animalId; // Foreign Key
    private Long applicationStatusId; // Foreign Key
    private String note;
    private Date submissionDate;
    private Date confirmationDate;
}
