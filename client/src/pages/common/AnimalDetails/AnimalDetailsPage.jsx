import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { Typography, Box, Container } from '@mui/material';
import {calculateAge} from "../../../utils/utils";
import {fetchAnimal} from "../../../api/api";

function AnimalDetailsPage() {
    const { animalId } = useParams();

    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const animalData = await fetchAnimal(animalId);
                setAnimal(animalData);
            } catch (error) {
                console.log(`Error fetching animal with id ${animalId}`);
            }
        };

        fetchData();
    }, [animalId]);

    if (!animal) {
        return <Typography align="center" variant="h4">Loading...</Typography>;
    }

    const age = calculateAge(animal.dateOfBirth);


    return (
        <>
            <Header />
            <Typography align="center" variant="h2" mb={5}>
                Animal Details
            </Typography>
            <Container maxWidth="lg">
                <Box sx={{ padding: 3, backgroundColor: '#f0f0f0' }}>
                    <Typography variant="h5" gutterBottom>
                        {animal.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Species:</strong> {animal.species}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Description:</strong> {animal.description}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Date of Birth:</strong> {animal.dateOfBirth} (Age: {age} y.o.)
                    </Typography>
                    <Box mt={3} display="flex" justifyContent="center">
                        <img
                            src={animal.photoUrl}
                            alt={animal.name}
                            style={{ maxWidth: '70%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Box>
                </Box>
            </Container>
        </>
    );
}


export default AnimalDetailsPage;