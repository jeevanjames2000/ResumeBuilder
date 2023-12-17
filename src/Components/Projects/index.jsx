import { Button, Card, CardContent, CardHeader, Grid, IconButton, TextField } from '@mui/material'
import React, { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { MyContext } from '../../App';


export default function EducationForm() {

    const Context = useContext(MyContext)
    const initialState = Context.project
    console.log("initialState: ", initialState);
    const setState = Context.setProject




    // const handleAddProject = () => {
    //     setProject([...project, {
    //         projectName: '',
    //         skills: '',
    //         description: '',

    //     }]);
    // };

    // const handleDeleteProject = (index) => {
    //     const newproject = [...project];
    //     newproject.splice(index, 1);
    //     setProject(newproject);
    // };

    // const handleProjectChange = (index, field, value) => {
    //     const newproject = [...project];
    //     newproject[index][field] = value;
    //     setProject(newproject);
    // };

    return (
        <form autoComplete="off" noValidate>
            <Card>
                <CardHeader title="Add Projects" />
                <CardContent>
                    {/* {project.map((education, index) => ( */}
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                required
                                fullWidth
                                name={`projectName`}
                                label="Project Name"
                                variant="outlined"
                                value={initialState.projectName}
                                onChange={(e) => {
                                    setState({ ...initialState, projectName: e.target.value })
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                required
                                fullWidth
                                name={`skills`}
                                label="Skills"
                                variant="outlined"
                                value={initialState.skills}
                                onChange={(e) => {
                                    setState({ ...initialState, skills: e.target.value })
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                required
                                fullWidth
                                name={`description`}
                                label="Description"
                                variant="outlined"
                                value={initialState.description}
                                onChange={(e) => {
                                    setState({ ...initialState, description: e.target.value })
                                }}
                            />
                        </Grid>

                        {/* <Grid item container xs={12} spacing={2} marginBottom={2}>
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
                            </Grid> */}

                    </Grid>
                    {/* ))} */}

                </CardContent>
            </Card>
        </form>
    )
}
