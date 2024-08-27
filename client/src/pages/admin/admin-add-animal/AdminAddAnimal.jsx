import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Header from '../../../components/Header/Header';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { createAnimal } from '../../../api/api';

function AddAnimalForm() {
    dayjs.extend(advancedFormat);
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        description: '',
        dateOfBirth: null,
        photoUrl: '',
    });

    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateOfBirthChange = (date) => {
        const currentDate = dayjs();
        if (date && date.isValid && date.isAfter(currentDate, 'day')) {
            date = currentDate;
        }
        setFormData((prevData) => ({
            ...prevData,
            dateOfBirth: date,
        }));
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.species) tempErrors.species = "Species is required.";
        if (!formData.description) tempErrors.description = "Description is required.";
        if (!formData.dateOfBirth) tempErrors.dateOfBirth = "Date of Birth is required.";
        if (!formData.photoUrl) tempErrors.photoUrl = "Photo URL is required.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setOpen(true);
        }
    };

    const handleConfirm = async () => {
        try {
            if (formData.dateOfBirth) {
                formData.dateOfBirth = new Date(formData.dateOfBirth).toISOString();
            }
            const response = await createAnimal(formData);
            console.log('Animal created successfully:', response);

            setFormData({
                name: '',
                species: '',
                description: '',
                dateOfBirth: null,
                photoUrl: '',
            });
        } catch (error) {
            console.error('Error creating animal:', error);
        }

        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header />
            <Typography align="center" variant="h2" mb={5}>
                Add New Animal
            </Typography>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Paper elevation={3} style={{ padding: 20 }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                            <TextField
                                name="species"
                                label="Species"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.species}
                                onChange={handleInputChange}
                                required
                                error={!!errors.species}
                                helperText={errors.species}
                            />
                            <TextField
                                name="description"
                                label="Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={3}
                                margin="normal"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                error={!!errors.description}
                                helperText={errors.description}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    name="dateOfBirth"
                                    label="Date of Birth"
                                    value={formData.dateOfBirth}
                                    onChange={handleDateOfBirthChange}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            required
                                            error={!!errors.dateOfBirth}
                                            helperText={errors.dateOfBirth}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                            <TextField
                                name="photoUrl"
                                label="Photo URL"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.photoUrl}
                                onChange={handleInputChange}
                                required
                                error={!!errors.photoUrl}
                                helperText={errors.photoUrl}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{ marginTop: 20 }}
                            >
                                Add Animal
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Submission</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to add this animal?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddAnimalForm;