package ua.nure.Animal.shelter.dao.impl;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ua.nure.Animal.shelter.dao.UserDAO;
import ua.nure.Animal.shelter.model.User;
import ua.nure.Animal.shelter.util.JdbcUtils;
import ua.nure.Animal.shelter.util.RowMapperUtils;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {
    @Autowired
    private JdbcUtils jdbcUtils;
    @Autowired
    private RowMapperUtils rowMapperUtils;
    @Override
    public User findById(Long id) {
        String sql = "SELECT * FROM user WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
            PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    return rowMapperUtils.mapUser(resultSet);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        String sql = "SELECT * FROM user";
        try (Connection connection = jdbcUtils.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {
            while (resultSet.next()) {
                users.add(rowMapperUtils.mapUser(resultSet));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return users;
    }

    @Override
    public void save(User user) {
        String sql = "INSERT INTO user (" +
                "role_id, " +
                "first_name, " +
                "last_name, " +
                "email, " +
                "contact_number, " +
                "password, " +
                "date_of_birth, " +
                "address" +
                ") VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            statement.setLong(1, user.getRoleId());
            statement.setString(2, user.getFirstName());
            statement.setString(3, user.getLastName());
            statement.setString(4, user.getEmail());
            statement.setString(5, user.getContactNumber());
            statement.setString(6, user.getPassword());
            statement.setDate(7, (Date) user.getDateOfBirth());
            statement.setString(8, user.getAddress());
            statement.executeUpdate();
            ResultSet generatedKeys = statement.getGeneratedKeys();
            if (generatedKeys.next()) {
                user.setId(generatedKeys.getLong(1));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void update(User user) {
        String sql = "UPDATE user SET " +
                "role_id = ?, " +
                "first_name = ?, " +
                "last_name = ?, " +
                "email = ?, " +
                "contact_number = ?, " +
                "password = ?, " +
                "date_of_birth = ?, " +
                "address = ? " +
                "WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, user.getRoleId());
            statement.setString(2, user.getFirstName());
            statement.setString(3, user.getLastName());
            statement.setString(4, user.getEmail());
            statement.setString(5, user.getContactNumber());
            statement.setString(6, user.getPassword());
            statement.setDate(7, (Date) user.getDateOfBirth());
            statement.setString(8, user.getAddress());
            statement.setLong(9, user.getId());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Long id) {
        String sql = "DELETE FROM user WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
