import { Button, Card, CardContent, CardHeader, Grid, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function EducationForm() {

    const [project, setProject] = useState([{
        projectName: '',
        skills: '',
        description: '',
    }]);

    const handleAddProject = () => {
        setProject([...project, {
            projectName: '',
            skills: '',
            description: '',

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

    return (
        <form autoComplete="off" noValidate>
            <Card>
                <CardHeader title="Add Projects" />
                <CardContent>
                    {project.map((education, index) => (
                        <Grid container spacing={3} key={index}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`projectName${index}`}
                                    label="Project Name"
                                    variant="outlined"
                                    value={project.projectName}
                                    onChange={(e) => handleProjectChange(index, 'courseName', e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`skills${index}`}
                                    label="Skills"
                                    variant="outlined"
                                    value={project.skills}
                                    onChange={(e) => handleProjectChange(index, 'skills', e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`description${index}`}
                                    label="Description"
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
