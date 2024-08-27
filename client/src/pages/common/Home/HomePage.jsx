import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Header from "../../../components/Header/Header";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Header />
            <Container maxWidth="lg" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Welcome to Animal Shelter
                </Typography>
                <Typography variant="h4" align="center" paragraph>
                    Find your perfect companion today!
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Our shelter provides a loving home for animals in need. Browse our available pets and submit an adoption request.
                </Typography>
                <Container maxWidth="sm" style={{ textAlign: 'center', margin: '2rem auto' }}>
                    <Button variant="contained" color="primary">
                        <Link to={`/animals`} style={{color: "white"}}>View Available Animals</Link>
                    </Button>
                </Container>
            </Container>
        </>
    );
};

export default HomePage;