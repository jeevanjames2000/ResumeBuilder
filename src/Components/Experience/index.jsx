import { Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Grid, IconButton, TextField } from '@mui/material'
import React, { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Girl } from '@mui/icons-material';
import { MyContext } from '../../App';


export default function Experience() {
    const Context = useContext(MyContext)
    const initialState = Context.experience
    console.log("initialState: ", initialState);
    const setState = Context.setExperience





    // const handleAddProject = () => {
    //     setProject([...project, {
    //         companyName: '',
    //         joiningDate: '',
    //         relevingDate: '',
    //         address: '',
    //         description: '',
    //         isPresent: false,

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
    const handleCheckboxChange = (index) => {
        const newEducationDetails = [...initialState];
        newEducationDetails[index].isPresent = !newEducationDetails[index].isPresent;
        setState(newEducationDetails);
    };


    return (
        <form autoComplete="off" noValidate>
            <Card>
                <CardHeader title="Add Experiance" />
                <CardContent>
                    {/* {project.map((education, index) => ( */}
                    <Grid container spacing={3} >
                        <Grid item md={6} xs={12}>
                            <TextField
                                required
                                fullWidth
                                name={`companyName`}
                                label="Company Name"
                                variant="outlined"
                                value={initialState.companyName}
                                onChange={(e) => {
                                    setState({ ...initialState, companyName: e.target.value })
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                required
                                fullWidth
                                name={`joiningDate`}
                                label="Joining Date"
                                type='date'
                                variant="outlined"
                                value={initialState.joiningDate}
                                onChange={(e) => {
                                    setState({ ...initialState, joiningDate: e.target.value })
                                }}
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
                                    name={`relevingDate`}
                                    label="Releving Date"
                                    type='date'
                                    variant="outlined"
                                    value={initialState.relevingDate}
                                    onChange={(e) => {
                                        setState({ ...initialState, relevingDate: e.target.value })
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            {/* <Grid item container md={2} xs={2} justifyContent={'center'}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={initialState.isPresent}
                                            onChange={(e) => handleCheckboxChange(e.target.value)}
                                            color="primary"
                                        />
                                    }
                                    label="Present"
                                />
                            </Grid> */}
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                required
                                fullWidth
                                name={`address`}
                                label="Address"
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
                                name={`description`}
                                label="Description"
                                multiline
                                maxRows={4}
                                variant="outlined"
                                value={initialState.projectName}
                                onChange={(e) => {
                                    setState({ ...initialState, projectName: e.target.value })
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
