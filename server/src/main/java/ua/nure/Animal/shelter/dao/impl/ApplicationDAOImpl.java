package ua.nure.Animal.shelter.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ua.nure.Animal.shelter.dao.ApplicationDAO;
import ua.nure.Animal.shelter.model.Application;
import ua.nure.Animal.shelter.util.JdbcUtils;
import ua.nure.Animal.shelter.util.RowMapperUtils;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ApplicationDAOImpl implements ApplicationDAO {
    @Autowired
    private JdbcUtils jdbcUtils;
    @Autowired
    private RowMapperUtils rowMapperUtils;
    @Override
    public Application findById(Long id) {
        String sql = "SELECT * FROM application WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    return rowMapperUtils.mapApplication(resultSet);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Application> findAll() {
        List<Application> applications = new ArrayList<>();
        String sql = "SELECT * FROM application";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                applications.add(rowMapperUtils.mapApplication(resultSet));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return applications;
    }

    @Override
    public void save(Application application) {
        String sql = "INSERT INTO application (" +
                "user_id, " +
                "animal_id, " +
                "application_status_id, " +
                "note, " +
                "submission_date, " +
                "confirmation_date" +
                ") VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            statement.setLong(1, application.getUserId());
            statement.setLong(2, application.getAnimalId());
            statement.setLong(3, application.getApplicationStatusId());
            statement.setString(4, application.getNote());
            statement.setDate(5, new java.sql.Date(application.getSubmissionDate().getTime()));

            if (application.getConfirmationDate() != null) {
                statement.setDate(6, new java.sql.Date(application.getConfirmationDate().getTime()));
            } else {
                statement.setNull(6, java.sql.Types.DATE);
            }

            statement.executeUpdate();
            ResultSet generatedKeys = statement.getGeneratedKeys();
            if (generatedKeys.next()) {
                application.setId(generatedKeys.getLong(1));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void update(Application application) {
        String sql = "UPDATE application SET " +
                "user_id = ?, " +
                "animal_id = ?, " +
                "application_status_id = ?, " +
                "note = ?, " +
                "submission_date = ?, " +
                "confirmation_date = ? " +
                "WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, application.getUserId());
            statement.setLong(2, application.getAnimalId());
            statement.setLong(3, application.getApplicationStatusId());
            statement.setString(4, application.getNote());
            statement.setDate(5, new java.sql.Date(application.getSubmissionDate().getTime()));

            if (application.getConfirmationDate() != null) {
                statement.setDate(6, new java.sql.Date(application.getConfirmationDate().getTime()));
            } else {
                statement.setNull(6, java.sql.Types.DATE);
            }

            statement.setLong(7, application.getId());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Long id) {
        String sql = "DELETE FROM application WHERE id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Application> getUserApplications(Long id) {
        List<Application> applications = new ArrayList<>();
        String sql = "SELECT * FROM application WHERE user_id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                applications.add(rowMapperUtils.mapApplication(resultSet));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return applications;
    }

    @Override
    public Application getOneUserApplication(Long userId, Long applicationId) {
        String sql = "SELECT * FROM application WHERE id = ? AND user_id = ?";
        try (Connection connection = jdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, userId);
            statement.setLong(2, applicationId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    return rowMapperUtils.mapApplication(resultSet);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
