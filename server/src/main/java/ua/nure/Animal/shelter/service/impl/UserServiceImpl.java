package ua.nure.Animal.shelter.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.nure.Animal.shelter.dao.UserDAO;
import ua.nure.Animal.shelter.model.User;
import ua.nure.Animal.shelter.service.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDAO userDAO;
    @Override
    public User getUserById(Long id) {
        return userDAO.findById(id) ;
    }

    @Override
    public List<User> getAllUsers() {
        return userDAO.findAll();
    }

    @Override
    public void saveUser(User user) {
        userDAO.save(user);
    }

    @Override
    public void updateUser(User user) {
        userDAO.update(user);
    }

    @Override
    public void deleteUser(Long id) {
        userDAO.delete(id);
    }
}
