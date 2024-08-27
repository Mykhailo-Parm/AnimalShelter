package ua.nure.Animal.shelter.dao;

import ua.nure.Animal.shelter.model.User;

import java.util.List;

public interface UserDAO {
    User findById(Long id);
    List<User> findAll();
    void save(User user);
    void update(User user);
    void delete(Long id);
}
