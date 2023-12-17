import { Button, Card, CardContent, CardHeader, Grid, IconButton, TextField } from '@mui/material'
import React, { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { MyContext } from '../../App';


export default function EducationForm() {

    const Context = useContext(MyContext)
    const initialState = Context.education
    console.log("initialState: ", initialState);
    const setState = Context.setEducation



    // const handleAddEducation = () => {
    //     setState([...initialState, {
    //         courseName: '',
    //         completionYear: '',
    //         college: '',
    //         percentage: '',
    //     }]);
    // };

    // const handleDeleteEducation = (index) => {
    //     const newEducationDetails = [...initialState];
    //     newEducationDetails.splice(index, 1);
    //     setState(newEducationDetails);
    // };

    // const handleEducationChange = (index, field, value) => {
    //     const newEducationDetails = [...initialState];
    //     newEducationDetails[index][field] = value;
    //     setState(newEducationDetails);
    // };

    return (
        <form autoComplete="off" noValidate>
            <Card>
                <CardHeader title="Add Education Details" />
                <CardContent>
                    {/* {initialState.map((education, index) => ( */}
                    <>
                        <Grid container spacing={3} >
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`courseName`}
                                    label="Course Name"
                                    variant="outlined"
                                    value={initialState.courseName}
                                    onChange={(e) => {
                                        setState({ ...initialState, courseName: e.target.value })
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`completionYear`}
                                    label="Completion Year"
                                    type="number"
                                    variant="outlined"
                                    value={initialState.completionYear}
                                    onChange={(e) => {
                                        setState({ ...initialState, completionYear: e.target.value })
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name={`college`}
                                    label="College/School"
                                    variant="outlined"
                                    value={initialState.college}
                                    onChange={(e) => {
                                        setState({ ...initialState, college: e.target.value })
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    name={`percentage`}
                                    label="Percentage"
                                    variant="outlined"
                                    value={initialState.percentage}
                                    onChange={(e) => {
                                        setState({ ...initialState, percentage: e.target.value })
                                    }}
                                />
                            </Grid>
                            {/* <Grid item container xs={12} spacing={2} marginBottom={2}>
                                <Grid item xs={1}>
                                    <Button variant="outlined" color="primary" onClick={}>
                                        Add
                                    </Button>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button variant="outlined" color="primary" onClick={() => handleDeleteEducation(index)}>
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid> */}
                        </Grid>
                    </>

                    {/* ))} */}

                </CardContent>
            </Card>
        </form>
    )
}
