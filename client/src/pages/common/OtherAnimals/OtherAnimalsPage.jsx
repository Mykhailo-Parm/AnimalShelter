import Header from "../../../components/Header/Header";
import {Container, Typography} from "@mui/material";
import AnimalList from "../../../components/AnimalList/AnimalList";
import mockData from "../../../data/data";
import {useEffect, useState} from "react";
import {fetchAnimalsData, fetchOtherAnimalsData} from "../../../api/api";

function OtherAnimalsPage() {
    const [otherAnimals, setOtherAnimals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const otherAnimalsData = await fetchOtherAnimalsData();
                setOtherAnimals(otherAnimalsData);
            } catch (error) {
                console.error('Error fetching other animals data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Header />
            <Container>
                <Typography align="center" variant="h2" mb={5}>Other animals in our Shelter</Typography>
                <AnimalList data={otherAnimals}/>
            </Container>

        </>
    )
}

export default OtherAnimalsPage;