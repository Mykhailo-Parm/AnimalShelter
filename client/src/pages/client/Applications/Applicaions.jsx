import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@mui/material';
import { fetchAnimal } from '../../../api/api'; // Import your fetchAnimal function

function Applicaions() {
    const [userApplications, setUserApplications] = useState([]);

    useEffect(() => {
        const userId = 4; // Set the user ID (replace with dynamic value)
        fetch(`http://localhost:8080/api/v1/users/${userId}/applications`)
            .then(response => response.json())
            .then(async data => {
                // Fetch animal data for each application
                const applicationsWithAnimalData = await Promise.all(data.map(async application => {
                    const animalData = await fetchAnimal(application.animalId);
                    return { ...application, animalData };
                }));
                setUserApplications(applicationsWithAnimalData);
            })
            .catch(error => console.error('Error fetching user applications:', error));
    }, []);

    const getStatusText = (applicationStatusId) => {
        switch (applicationStatusId) {
            case 1:
                return 'Pending';
            case 2:
                return 'Accepted';
            case 3:
                return 'Rejected';
            default:
                return 'Unknown'; // Default status if ID is unrecognized
        }
    };

    const getStatusColor = (applicationStatusId) => {
        switch (applicationStatusId) {
            case 1:
                return 'blue'; // Pending (blue)
            case 2:
                return 'green'; // Accepted (green)
            case 3:
                return 'red'; // Rejected (red)
            default:
                return 'inherit'; // Default color if status is unrecognized
        }
    };

    return (
        <>
            <Header />
            <Typography align="center" variant="h2" mb={5}>
                Check your applications
            </Typography>
            <Container maxWidth="lg">
                <Table sx={{ backgroundColor: '#f0f0f0' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Animal</TableCell>
                            <TableCell>Species</TableCell>
                            <TableCell>Submission Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Confirmation Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userApplications.map((application) => (
                            <TableRow key={application.id}>
                                <TableCell>{application.animalData.name}</TableCell>
                                <TableCell>{application.animalData.species}</TableCell>
                                <TableCell>{application.submissionDate}</TableCell>
                                <TableCell>
                                    <span style={{ color: getStatusColor(application.applicationStatusId) }}>
                                        {getStatusText(application.applicationStatusId)}
                                    </span>
                                </TableCell>
                                <TableCell>{application.confirmationDate || '-'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </>
    );
}

export default Applicaions;