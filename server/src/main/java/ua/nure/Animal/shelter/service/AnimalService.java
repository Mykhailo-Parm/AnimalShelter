package ua.nure.Animal.shelter.service;

import ua.nure.Animal.shelter.model.Animal;

import java.util.List;

public interface AnimalService {
    Animal getAnimalById(Long id);
    List<Animal> getAllAnimals();
    void saveAnimal(Animal animal);
    void updateAnimal(Animal animal);
    void deleteAnimal(Long id);
    List<Animal> getAllCats();
    List<Animal> getAllDogs();
    List<Animal> getAllOtherAnimals();
}
