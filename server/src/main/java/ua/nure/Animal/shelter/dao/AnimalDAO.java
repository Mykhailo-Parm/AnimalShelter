package ua.nure.Animal.shelter.dao;

import ua.nure.Animal.shelter.model.Animal;

import java.util.List;

public interface AnimalDAO {
    Animal findById(Long id);
    List<Animal> findALl();
    void save(Animal animal);
    void update(Animal animal);
    void delete(Long id);
    List<Animal> findAllCats();
    List<Animal> findAllDogs();
    List<Animal> findAllOtherAnimals();
}
