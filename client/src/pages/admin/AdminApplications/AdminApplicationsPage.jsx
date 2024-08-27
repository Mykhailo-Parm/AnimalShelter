import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import {
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Container,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import { fetchUser, fetchAnimal, updateApplication } from "../../../api/api"; // Update the import path accordingly

function AdminApplicationsPage() {
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [animalName, setAnimalName] = useState('');

    useEffect(() => {
        // Fetch applications from the API
        fetch('http://localhost:8080/api/v1/applications')
            .then(response => response.json())
            .then(data => setApplications(data))
            .catch(error => console.error('Error fetching applications:', error));
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

    const handleOpenConfirmationDialog = async (application) => {
        setSelectedApplication(application);
        setConfirmationDialogOpen(true);
        try {
            const user = await fetchUser(application.userId);
            const animal = await fetchAnimal(application.animalId);
            setUserName(user.firstName);
            setAnimalName(animal.name);
        } catch (error) {
            console.error('Error fetching user or animal data:', error);
        }
    };

    const handleCloseConfirmationDialog = () => {
        setSelectedApplication(null);
        setUserName('');
        setAnimalName('');
        setConfirmationDialogOpen(false);
    };

    const confirmApplication = async () => {
        if (!selectedApplication) return;

        const updatedApplication = {
            ...selectedApplication,
            applicationStatusId: 2, // Accepted
            confirmationDate: new Date().toISOString(), // Current date
        };

        try {
            await updateApplication(selectedApplication.id, updatedApplication);
            setApplications(applications.map(app =>
                app.id === selectedApplication.id ? updatedApplication : app
            ));
        } catch (error) {
            console.error('Error updating application:', error);
        }

        handleCloseConfirmationDialog();
    };

    const declineApplication = async () => {
        if (!selectedApplication) return;

        const updatedApplication = {
            ...selectedApplication,
            applicationStatusId: 3, // Rejected
            confirmationDate: new Date().toISOString(), // Current date
        };

        try {
            await updateApplication(selectedApplication.id, updatedApplication);
            setApplications(applications.map(app =>
                app.id === selectedApplication.id ? updatedApplication : app
            ));
        } catch (error) {
            console.error('Error updating application:', error);
        }

        handleCloseConfirmationDialog();
    };

    const renderConfirmationDialog = () => {
        if (!selectedApplication) {
            return null;
        }

        const statusText = getStatusText(selectedApplication.applicationStatusId);
        const statusColor = getStatusColor(selectedApplication.applicationStatusId);

        return (
            <Dialog open={confirmationDialogOpen} onClose={handleCloseConfirmationDialog}>
                <DialogTitle>Application Details</DialogTitle>
                <DialogContent>
                    <Typography>User: {userName}</Typography>
                    <Typography>Animal: {animalName}</Typography>
                    <Typography>Status: <span style={{ color: statusColor }}>{statusText}</span></Typography>
                    <Typography>Submission Date: {selectedApplication.submissionDate}</Typography>
                    <Typography>Confirmation Date: {selectedApplication.confirmationDate || '-'}</Typography>
                    <Typography>Note: {selectedApplication.note}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmApplication}>Confirm</Button>
                    <Button onClick={declineApplication}>Decline</Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <>
            <Header />
            <Typography align="center" variant="h2" mb={5}>
                All Applications
            </Typography>
            <Container maxWidth="lg">
                <Table sx={{ backgroundColor: '#f0f0f0' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell>Animal</TableCell>
                            <TableCell>Submission Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.slice().reverse().map((application) => ( // Reverse the applications order
                            <TableRow key={application.id}>
                                <TableCell>{application.userId}</TableCell>
                                <TableCell>{application.animalId}</TableCell>
                                <TableCell>{application.submissionDate}</TableCell>
                                <TableCell>
                                    <span style={{ color: getStatusColor(application.applicationStatusId) }}>
                                        {getStatusText(application.applicationStatusId)}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    {application.applicationStatusId === 1 ? (
                                        <Button onClick={() => handleOpenConfirmationDialog(application)}>View & Respond</Button>
                                    ) : (
                                        <Button disabled>View & Respond</Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
            {renderConfirmationDialog()}
        </>
    );
}

export default AdminApplicationsPage;