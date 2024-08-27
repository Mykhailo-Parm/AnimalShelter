package ua.nure.Animal.shelter.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ua.nure.Animal.shelter.dao.AnimalDAO;
import ua.nure.Animal.shelter.model.Animal;
import ua.nure.Animal.shelter.util.JdbcUtils;
import ua.nure.Animal.shelter.util.RowMapperUtils;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AnimalDAOImpl implements AnimalDAO {
    @Autowired
    private JdbcUtils jdbcUtils;
    @Autowired
    private RowMapperUtils rowMapperUtils;
    @Override
    public Animal findById(Long id) {
        String sql = "SELECT * FROM animal WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    return rowMapperUtils.mapAnimal(resultSet);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Animal> findALl() {
        List<Animal> animals = new ArrayList<>();
        String sql = "SELECT * FROM animal";
        try (Connection connection = jdbcUtils.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {
            while (resultSet.next()) {
                animals.add(rowMapperUtils.mapAnimal(resultSet));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return animals;
    }

    @Override
    public void save(Animal animal) {
        String sql = "INSERT INTO animal (" +
                "name, " +
                "species, " +
                "description, " +
                "date_of_birth, " +
                "photo_url" +
                ") VALUES (?, ?, ?, ?, ?)";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            statement.setString(1, animal.getName());
            statement.setString(2, animal.getSpecies());
            statement.setString(3, animal.getDescription());
            // Convert java.util.Date to java.sql.Date
            java.sql.Date sqlDate = new java.sql.Date(animal.getDateOfBirth().getTime());
            statement.setDate(4, sqlDate);
            statement.setString(5, animal.getPhotoUrl());
            statement.executeUpdate();

            ResultSet generatedKeys = statement.getGeneratedKeys();
            if (generatedKeys.next()) {
                animal.setId(generatedKeys.getLong(1));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void update(Animal animal) {
        String sql = "UPDATE animal SET " +
                "name = ?, " +
                "species = ?, " +
                "description = ?, " +
                "date_of_birth = ?, " +
                "photo_url = ? " +
                "WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, animal.getName());
            statement.setString(2, animal.getSpecies());
            statement.setString(3, animal.getDescription());
            statement.setDate(4, (Date) animal.getDateOfBirth());
            statement.setString(5, animal.getPhotoUrl());
            statement.setLong(6, animal.getId());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Long id) {
        String sql = "DELETE FROM animal WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Animal> findAllCats() {
        List<Animal> cats = new ArrayList<>();
        String sql = "SELECT * FROM animal WHERE species = 'cat'";
        try (Connection connection = jdbcUtils.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {
            while (resultSet.next()) {
                cats.add(rowMapperUtils.mapAnimal(resultSet));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return cats;
    }

    @Override
    public List<Animal> findAllDogs() {
        List<Animal> dogs = new ArrayList<>();
        String sql = "SELECT * FROM animal WHERE species = 'dog'";
        try (Connection connection = jdbcUtils.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {
            while (resultSet.next()) {
                dogs.add(rowMapperUtils.mapAnimal(resultSet));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dogs;
    }

    @Override
    public List<Animal> findAllOtherAnimals() {
        List<Animal> otherAnimals = new ArrayList<>();
        String sql = "SELECT * FROM animal WHERE species != 'cat' AND species != 'dog'";
        try (Connection connection = jdbcUtils.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {
            while (resultSet.next()) {
                otherAnimals.add(rowMapperUtils.mapAnimal(resultSet));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return otherAnimals;
    }
}
