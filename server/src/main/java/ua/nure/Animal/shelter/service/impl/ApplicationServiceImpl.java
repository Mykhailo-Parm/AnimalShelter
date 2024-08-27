package ua.nure.Animal.shelter.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.nure.Animal.shelter.dao.ApplicationDAO;
import ua.nure.Animal.shelter.model.Application;
import ua.nure.Animal.shelter.service.ApplicationService;

import java.util.List;

@Service
public class ApplicationServiceImpl implements ApplicationService {
    @Autowired
    private ApplicationDAO applicationDAO;
    @Override
    public Application getApplicationById(Long id) {
        return applicationDAO.findById(id);
    }

    @Override
    public List<Application> getAllApplications() {
        return applicationDAO.findAll();
    }

    @Override
    public void saveApplication(Application application) {
        applicationDAO.save(application);
    }

    @Override
    public void updateApplication(Application application) {
        applicationDAO.update(application);
    }

    @Override
    public void deleteApplication(Long id) {
        applicationDAO.delete(id);
    }

    @Override
    public List<Application> getUserApplications(Long id) {
        return applicationDAO.getUserApplications(id);
    }

    @Override
    public Application getOneUserApplication(Long userId, Long applicationId) {
        return applicationDAO.getOneUserApplication(userId, applicationId);
    }
}
