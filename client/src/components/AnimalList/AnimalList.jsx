import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import AnimalCard from "../AnimalCard/AnimalCard";
import {useEffect, useState} from "react";
import {fetchAnimalsData} from "../../api/api";

function AnimalList({data}) {


    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data.map(animal => (
                <Grid item xs={2} sm={4} md={4} key={animal.animal_id}>
                    <AnimalCard data={animal} key={animal.id}/>
                </Grid>
            ))}
        </Grid>
    )
}
export default AnimalList;