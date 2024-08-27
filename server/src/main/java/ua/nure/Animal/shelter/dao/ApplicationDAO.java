package ua.nure.Animal.shelter.dao;

import ua.nure.Animal.shelter.model.Application;

import java.util.List;

public interface ApplicationDAO {
    Application findById(Long id);
    List<Application> findAll();
    void save(Application application);
    void update(Application application);
    void delete(Long id);
    List<Application> getUserApplications(Long id);
    Application getOneUserApplication(Long userId, Long applicationId);
}
