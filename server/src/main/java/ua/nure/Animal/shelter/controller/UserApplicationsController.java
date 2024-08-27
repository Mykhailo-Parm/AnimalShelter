package ua.nure.Animal.shelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.nure.Animal.shelter.model.Application;
import ua.nure.Animal.shelter.service.ApplicationService;

import java.util.List;

@RestController
@RequestMapping("api/v1/users/{userId}/applications")
public class UserApplicationsController {
    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    public List<Application> getUserApplications(@PathVariable Long userId) {
        return applicationService.getUserApplications(userId);
    }

    @GetMapping("/{applicationId}")
    public Application getOneUserApplication(@PathVariable Long userId, @PathVariable Long applicationId) {
        return applicationService.getOneUserApplication(userId, applicationId);
    }
}
