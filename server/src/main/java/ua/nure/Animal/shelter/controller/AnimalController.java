package ua.nure.Animal.shelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.nure.Animal.shelter.model.Animal;
import ua.nure.Animal.shelter.service.AnimalService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/animals")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @GetMapping("/{id}")
    public Animal getAnimalById(@PathVariable Long id) {
        return animalService.getAnimalById(id);
    }

    @GetMapping
    public List<Animal> getAllAnimals() {
        return animalService.getAllAnimals();
    }

    @GetMapping("/cats")
    public List<Animal> getAllCats() {
        return animalService.getAllCats();
    }

    @GetMapping("/dogs")
    public List<Animal> getAllDogs() {
        return animalService.getAllDogs();
    }

    @GetMapping("/other")
    public List<Animal> getAllOtherAnimals() {
        return animalService.getAllOtherAnimals();
    }

    @PostMapping
    public void createAnimal(@RequestBody Animal animal) {
        animalService.saveAnimal(animal);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody Animal animal) {
        animal.setId(id);
        animalService.updateAnimal(animal);
    }

    @DeleteMapping("/{id}")
    public void deleteAnimal(Long id) {
        animalService.deleteAnimal(id);
    }
}
