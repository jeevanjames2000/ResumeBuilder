import { Button, Card, CardContent, CardHeader, Grid, IconButton, TextField } from '@mui/material'
import React, { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { MyContext } from '../../App';
export default function Skill() {

    const Context = useContext(MyContext)
    const initialState = Context.skills
    console.log("initialState: ", initialState);
    const setState = Context.setSkills


    // const handleAddSkill = () => {
    //     setSkills([...skills, '']);
    // };

    // const handleDeleteSkill = (index) => {
    //     const newSkills = [...skills];
    //     newSkills.splice(index, 1);
    //     setSkills(newSkills);
    // };

    // const handleSkillChange = (index, value) => {
    //     const newSkills = [...skills];
    //     newSkills[index] = value;
    //     setSkills(newSkills);
    // };
    return (
        <form autoComplete="off" noValidate>
            <Card>
                <CardHeader title="Add Skills" />
                <CardContent>
                    <Grid container spacing={3}>
                        {/* {skills.map((skill, index) => ( */}
                        <Grid item md={2} xs={12} display={'flex'}>

                            <TextField
                                required
                                fullWidth
                                name={`skills`}
                                label={`Skill`}
                                variant="outlined"
                                value={initialState.skill1}
                                onChange={(e) => {
                                    setState({ ...initialState, skill1: e.target.value })
                                }}
                            />
                            {/* <IconButton
                                aria-label="delete"
                                color="secondary"
                                onClick={() => handleDeleteSkill(index)}
                            >
                                <DeleteIcon />
                            </IconButton> */}


                        </Grid>
                        <Grid item md={2} xs={12} display={'flex'}>


                            <TextField
                                required
                                fullWidth
                                name={`skills`}
                                label={`Skill`}
                                variant="outlined"
                                value={initialState.skill2}
                                onChange={(e) => {
                                    setState({ ...initialState, skill2: e.target.value })
                                }}
                            />
                        </Grid>
                        {/* ))}
                        <Grid item container alignItems={'center'} md={4} xs={12} >
                            <Button variant="outlined" color="primary" onClick={handleAddSkill}>
                                Add
                            </Button>
                        </Grid> */}
                    </Grid>
                </CardContent>
            </Card>
        </form>
    )
}
