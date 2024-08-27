import Header from "../../../components/Header/Header";
import {Container, Typography} from "@mui/material";
import AnimalList from "../../../components/AnimalList/AnimalList";
import mockData from "../../../data/data";
import {useEffect, useState} from "react";
import {fetchAnimalsData, fetchCatsData} from "../../../api/api";

function CatsPage() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const catsData = await fetchCatsData();
                setCats(catsData);
            } catch (error) {
                console.error('Error fetching cats data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Typography align="center" variant="h2" mb={5}>Cats and kittens in our Shelter</Typography>
                <AnimalList data={cats}/>
            </Container>

        </>
    )
}

export default CatsPage;