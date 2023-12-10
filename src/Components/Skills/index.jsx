import { Button, Card, CardContent, CardHeader, Grid, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Skill() {

    const [skills, setSkills] = useState(['']);

    const handleAddSkill = () => {
        setSkills([...skills, '']);
    };

    const handleDeleteSkill = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    };

    const handleSkillChange = (index, value) => {
        const newSkills = [...skills];
        newSkills[index] = value;
        setSkills(newSkills);
    };
    return (
        <form autoComplete="off" noValidate>
            <Card>
                <CardHeader title="Add Skills" />
                <CardContent>
                    <Grid container spacing={3}>
                        {skills.map((skill, index) => (
                            <Grid item md={2} xs={12} key={index} display={'flex'}>


                                <TextField
                                    required
                                    fullWidth
                                    name={`skills${index}`}
                                    label={`Skill ${index + 1}`}
                                    variant="outlined"
                                    value={skill}
                                    onChange={(e) => handleSkillChange(index, e.target.value)}
                                />
                                <IconButton
                                    aria-label="delete"
                                    color="secondary"
                                    onClick={() => handleDeleteSkill(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>


                            </Grid>
                        ))}
                        <Grid item container alignItems={'center'} md={4} xs={12} >
                            <Button variant="outlined" color="primary" onClick={handleAddSkill}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    )
}
