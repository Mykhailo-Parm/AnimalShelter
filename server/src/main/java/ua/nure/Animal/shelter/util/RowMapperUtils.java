package ua.nure.Animal.shelter.util;

import org.springframework.stereotype.Component;
import ua.nure.Animal.shelter.model.Animal;
import ua.nure.Animal.shelter.model.Application;
import ua.nure.Animal.shelter.model.User;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class RowMapperUtils {
    public User mapUser(ResultSet rs) throws SQLException {
        User user = new User();
        user.setId(rs.getLong("id"));
        user.setRoleId(rs.getLong("role_id"));
        user.setFirstName(rs.getString("first_name"));
        user.setLastName(rs.getString("last_name"));
        user.setEmail(rs.getString("email"));
        user.setContactNumber(rs.getString("contact_number"));
        user.setPassword(rs.getString("password"));
        user.setDateOfBirth(rs.getDate("date_of_birth"));
        user.setAddress(rs.getString("address"));
        return user;
    }

    public Animal mapAnimal(ResultSet rs) throws SQLException{
        Animal animal = new Animal();
        animal.setId(rs.getLong("id"));
        animal.setName(rs.getString("name"));
        animal.setSpecies(rs.getString("species"));
        animal.setDescription(rs.getString("description"));
        animal.setDateOfBirth(rs.getDate("date_of_birth"));
        animal.setPhotoUrl(rs.getString("photo_url"));
        return animal;
    }

    public Application mapApplication(ResultSet rs) throws SQLException {
        Application application = new Application();
        application.setId(rs.getLong("id"));
        application.setUserId(rs.getLong("user_id"));
        application.setAnimalId(rs.getLong("animal_id"));
        application.setApplicationStatusId(rs.getLong("application_status_id"));
        application.setNote(rs.getString("note"));
        application.setSubmissionDate(rs.getDate("submission_date"));
        application.setConfirmationDate(rs.getDate("confirmation_date"));
        return application;
    }
}
