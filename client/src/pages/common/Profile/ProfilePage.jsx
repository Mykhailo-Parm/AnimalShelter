import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import { Typography, Box, Badge, Container } from '@mui/material';
import { useGlobalState } from "../../../context/GlobalStateContext";
import { fetchUser } from "../../../api/api";

function ProfilePage() {
    const { isClientView } = useGlobalState(); // Access isClientView from global state
    const currentUser = isClientView ? { id: 5 } : { id: 1 }; // Determine user based on view
    const [user, setUser] = useState(null); // Initialize user state as null

    // Function to fetch user data based on the current view
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUser(currentUser.id);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [currentUser.id]); // Add dependency array to ensure useEffect runs when currentUser.id changes

    const getRoleBadge = () => {
        if (!user) return null; // Ensure user is defined before accessing properties

        const roleMap = {
            1: 'ADMIN',
            2: 'CLIENT'
        };
        const roleText = roleMap[user.roleId] || 'UNKNOWN';
        const badgeColor = user.roleId === 1 ? 'error' : 'success'; // Red for admin, green for client
        return <Badge color={badgeColor} badgeContent={roleText} sx={{ marginLeft: 5 }} />;
    };

    return (
        <>
            <Header />
            <Typography align="center" variant="h2" mb={5}>
                Profile Information
            </Typography>
            <Container maxWidth="lg">
                <Box sx={{ padding: 3, backgroundColor: '#f0f0f0' }}>
                    {user ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                                {user.firstName} {user.lastName} {getRoleBadge()}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Email:</strong> {user.email}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Contact Number:</strong> {user.contactNumber}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Date of Birth:</strong> {user.dateOfBirth}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Address:</strong> {user.address}
                            </Typography>
                        </>
                    ) : (
                        <Typography variant="body1">Loading...</Typography> // Show loading message while fetching user data
                    )}
                </Box>
            </Container>
        </>
    );
}

export default ProfilePage;