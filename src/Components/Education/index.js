import { Button, Card, CardContent, CardHeader, Grid, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function EducationForm() {

    const [educationDetails, setEducationDetails] = useState([{
        courseName: '',
        completionYear: '',
        college: '',
        percentage: '',
    }]);

    const handleAddEducation = () => {
        setEducationDetails([...educationDetails, {
            courseName: '',
            completionYear: '',
            college: '',
            percentage: '',
        }]);
    };

    const handleDeleteEducation = (index) => {
        const newEducationDetails = [...educationDetails];
        newEducationDetails.splice(index, 1);
        setEducationDetails(newEducationDetails);
    };

    const handleEducationChange = (index, field, value) => {
        const newEducationDetails = [...educationDetails];
        newEducationDetails[index][field] = value;
        setEducationDetails(newEducationDetails);
    };

    return (
        <form autoComplete="off" noValidate>
            <Card>
                <CardHeader title="Add Education Details" />
                <CardContent>
                    {educationDetails.map((education, index) => (
                        <>
                            <Grid container spacing={3} key={index}>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name={`courseName${index}`}
                                        label="Course Name"
                                        variant="outlined"
                                        value={education.courseName}
                                        onChange={(e) => handleEducationChange(index, 'courseName', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name={`completionYear${index}`}
                                        label="Completion Year"
                                        type="number"
                                        variant="outlined"
                                        value={education.completionYear}
                                        onChange={(e) => handleEducationChange(index, 'completionYear', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name={`college${index}`}
                                        label="College/School"
                                        variant="outlined"
                                        value={education.college}
                                        onChange={(e) => handleEducationChange(index, 'college', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12} >
                                    <TextField
                                        required
                                        fullWidth
                                        name={`percentage${index}`}
                                        label="Percentage"
                                        variant="outlined"
                                        value={education.percentage}
                                        onChange={(e) => handleEducationChange(index, 'percentage', e.target.value)}
                                    />
                                </Grid>
                                <Grid item container xs={12} spacing={2} marginBottom={2}>
                                    <Grid item xs={1}>
                                        <Button variant="outlined" color="primary" onClick={handleAddEducation}>
                                            Add
                                        </Button>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button variant="outlined" color="primary" onClick={() => handleDeleteEducation(index)}>
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>

                    ))}

                </CardContent>
            </Card>
        </form>
    )
}
