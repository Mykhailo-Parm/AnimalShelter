package ua.nure.Animal.shelter.service;

import ua.nure.Animal.shelter.model.User;

import java.util.List;

public interface UserService {
    User getUserById(Long id);
    List<User> getAllUsers();
    void saveUser(User user);
    void updateUser(User user);
    void deleteUser(Long id);
}
