import Header from "../../../components/Header/Header";
import {Typography, Container} from "@mui/material";
import AnimalList from "../../../components/AnimalList/AnimalList";
import mockData from "../../../data/data";
import {useEffect, useState} from "react";
import {fetchCatsData, fetchDogsData} from "../../../api/api";

function DogsPage() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dogsData = await fetchDogsData();
                setDogs(dogsData);
            } catch (error) {
                console.error('Error fetching dogs data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Header />
            <Container>
                <Typography align="center" variant="h2" mb={5}>Dogs and puppies in our Shelter</Typography>
                <AnimalList data={dogs}/>
            </Container>

        </>
    )
}

export default DogsPage;