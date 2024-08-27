package ua.nure.Animal.shelter.service;

import ua.nure.Animal.shelter.model.Application;

import java.util.List;

public interface ApplicationService {
    Application getApplicationById(Long id);
    List<Application> getAllApplications();
    void saveApplication(Application application);
    void updateApplication(Application application);
    void deleteApplication(Long id);
    List<Application> getUserApplications(Long id);
    Application getOneUserApplication(Long userId, Long applicationId);
}
