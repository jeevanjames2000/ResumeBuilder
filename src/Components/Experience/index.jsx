import { Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Grid, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Girl } from '@mui/icons-material';


export default function Experience() {

    const [project, setProject] = useState([{
        companyName: '',
        joiningDate: '',
        relevingDate: '',
        address: '',
        description: '',
        isPresent: false,
    }]);

    const handleAddProject = () => {
        setProject([...project, {
            companyName: '',
            joiningDate: '',
            relevingDate: '',
            address: '',
            description: '',
            isPresent: false,

        }]);
    };

    const handleDeleteProject = (index) => {
        const newproject = [...project];
        newproject.splice(index, 1);
        setProject(newproject);
    };

    const handleProjectChange = (index, field, value) => {
        const newproject = [...project];
        newproject[index][field] = value;
        setProject(newproject);
    };
    const handleCheckboxChange = (index) => {
        const newEducationDetails = [...project];
        newEducationDetails[index].isPresent = !newEducationDetails[index].isPresent;
        setProject(newEducationDetails);
    };

    return (
        <form autoComplete="off" noValidate>
            <Card>
                <CardHeader title="Add Experiance" />
                <CardContent>
                    {project.map((education, index) => (
                        <Grid container spacing={3} key={index}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`companyName${index}`}
                                    label="Company Name"
                                    variant="outlined"
                                    value={project.companyName}
                                    onChange={(e) => handleProjectChange(index, 'companyName', e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`joiningDate${index}`}
                                    label="Joining Date"
                                    type='date'
                                    variant="outlined"
                                    value={project.joiningDate}
                                    onChange={(e) => handleProjectChange(index, 'joiningDate', e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item container md={6} xs={12} display={'flex'} spacing={2}>
                                <Grid item md={10} xs={10}>
                                    <TextField
                                        required
                                        fullWidth
                                        name={`relevingDate${index}`}
                                        label="Releving Date"
                                        type='date'
                                        variant="outlined"
                                        value={project.relevingDate}
                                        onChange={(e) => handleProjectChange(index, 'relevingDate', e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item container md={2} xs={2} justifyContent={'center'}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={education.isPresent}
                                                onChange={() => handleCheckboxChange(index)}
                                                color="primary"
                                            />
                                        }
                                        label="Present"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`address${index}`}
                                    label="Address"
                                    variant="outlined"
                                    value={project.address}
                                    onChange={(e) => handleProjectChange(index, 'address', e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`description${index}`}
                                    label="Description"
                                    multiline
                                    maxRows={4}
                                    variant="outlined"
                                    value={project.description}
                                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                                />
                            </Grid>

                            <Grid item container xs={12} spacing={2} marginBottom={2}>
                                <Grid item xs={1}>
                                    <Button variant="outlined" color="primary" onClick={handleAddProject}>
                                        Add
                                    </Button>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button variant="outlined" color="primary" onClick={() => handleDeleteProject(index)}>
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    ))}

                </CardContent>
            </Card>
        </form>
    )
}
