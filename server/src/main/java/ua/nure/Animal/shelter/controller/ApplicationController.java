package ua.nure.Animal.shelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.nure.Animal.shelter.model.Application;
import ua.nure.Animal.shelter.service.ApplicationService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping("/{id}")
    public Application getApplicationById(@PathVariable Long id) {
        return applicationService.getApplicationById(id);
    }

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @PostMapping
    public void createApplication(@RequestBody Application application) {
        applicationService.saveApplication(application);
    }

    @PutMapping("/{id}")
    public void updateApplication(@PathVariable Long id, @RequestBody Application application) {
        application.setId(id);
        applicationService.updateApplication(application);
    }

    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplication(id);
    }
}