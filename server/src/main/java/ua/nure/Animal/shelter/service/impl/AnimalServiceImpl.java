package ua.nure.Animal.shelter.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.nure.Animal.shelter.dao.AnimalDAO;
import ua.nure.Animal.shelter.model.Animal;
import ua.nure.Animal.shelter.service.AnimalService;

import java.util.List;

@Service
public class AnimalServiceImpl implements AnimalService {
    @Autowired
    private AnimalDAO animalDAO;
    @Override
    public Animal getAnimalById(Long id) {
        return animalDAO.findById(id);
    }

    @Override
    public List<Animal> getAllAnimals() {
        return animalDAO.findALl();
    }

    @Override
    public void saveAnimal(Animal animal) {
        animalDAO.save(animal);
    }

    @Override
    public void updateAnimal(Animal animal) {
        animalDAO.update(animal);
    }

    @Override
    public void deleteAnimal(Long id) {
        animalDAO.delete(id);
    }

    @Override
    public List<Animal> getAllCats() {
        return animalDAO.findAllCats();
    }
    @Override
    public List<Animal> getAllDogs() {
        return animalDAO.findAllDogs();
    }
    @Override
    public List<Animal> getAllOtherAnimals() {
        return animalDAO.findAllOtherAnimals();
    }
}
