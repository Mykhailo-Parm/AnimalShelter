import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, FormControlLabel, Radio, RadioGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Header from '../../../components/Header/Header';
import { useParams } from "react-router-dom";
import { createApplication } from "../../../api/api";

const FosterForm = () => {
    let { animalId } = useParams();

    const [formData, setFormData] = useState({
        deliveryMethod: 'pickup', // Default to 'pickup'
        deliveryAddressOption: 'same', // Default to 'same'
        deliveryAddress: '',
        note: '',
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

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            deliveryAddressOption: 'same', // Reset address option when delivery method changes
            deliveryAddress: '', // Reset delivery address field
        }));
    };

    const validate = () => {
        let tempErrors = {};
        if (formData.deliveryMethod === 'delivery' && formData.deliveryAddressOption === 'different' && !formData.deliveryAddress) {
            tempErrors.deliveryAddress = "Delivery address is required if different address is selected.";
        }
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
        // Prepare application data
        const applicationData = {
            userId: 4,
            animalId: parseInt(animalId, 10),
            applicationStatusId: 1,
            note: formData.note,
            submissionDate: new Date().toISOString(),
            confirmationDate: null
        };

        try {
            const response = await createApplication(applicationData);
            console.log('Application created successfully:', response);
            // Handle success (e.g., show success message, navigate to another page, etc.)

            // Reset form after submission (optional)
            setFormData({
                deliveryMethod: 'pickup',
                deliveryAddressOption: 'same',
                deliveryAddress: '',
                note: '',
            });
        } catch (error) {
            console.error('Error creating application:', error);
            // Handle error (e.g., show error message to user)
        }

        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header />
            <Typography align="center" variant="h2" mb={5}>Foster an animal right now!</Typography>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Paper elevation={3} style={{ padding: 20 }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h6" gutterBottom>Delivery Method:</Typography>
                            <RadioGroup
                                name="deliveryMethod"
                                value={formData.deliveryMethod}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel
                                    value="pickup"
                                    control={<Radio />}
                                    label="Self Pick-up"
                                />
                                <FormControlLabel
                                    value="delivery"
                                    control={<Radio />}
                                    label="Delivery"
                                />
                            </RadioGroup>

                            {formData.deliveryMethod === 'delivery' && (
                                <>
                                    <Typography variant="h6" gutterBottom>Delivery Address Option:</Typography>
                                    <RadioGroup
                                        name="deliveryAddressOption"
                                        value={formData.deliveryAddressOption}
                                        onChange={handleInputChange}
                                    >
                                        <FormControlLabel
                                            value="same"
                                            control={<Radio />}
                                            label="Same as user's profile address"
                                        />
                                        <FormControlLabel
                                            value="different"
                                            control={<Radio />}
                                            label="Different Address"
                                        />
                                    </RadioGroup>

                                    {formData.deliveryAddressOption === 'different' && (
                                        <TextField
                                            name="deliveryAddress"
                                            label="Delivery Address"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            value={formData.deliveryAddress}
                                            onChange={handleInputChange}
                                            required
                                            error={!!errors.deliveryAddress}
                                            helperText={errors.deliveryAddress}
                                        />
                                    )}
                                </>
                            )}

                            <TextField
                                name="note"
                                label="Additional Note"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={3}
                                margin="normal"
                                value={formData.note}
                                onChange={handleInputChange}
                            />
                            <Button variant="contained" color="primary" type="submit" style={{ marginTop: 20 }}>
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Confirm Submission</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit this application?
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
};

export default FosterForm;