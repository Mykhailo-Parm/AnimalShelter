import {useEffect, useState} from "react";
import {fetchAnimalsData, fetchDogsData} from "../../../api/api";
import Header from "../../../components/Header/Header";
import {Container, Typography} from "@mui/material";
import AnimalList from "../../../components/AnimalList/AnimalList";

function AnimalsPage() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const animalsData = await fetchAnimalsData();
                setAnimals(animalsData);
            } catch (error) {
                console.error('Error fetching animals data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Typography align="center" variant="h2" mb={5}>Find your new best fur friend</Typography>
                <AnimalList data={animals}/>
            </Container>

        </>
    )
}

export default AnimalsPage;