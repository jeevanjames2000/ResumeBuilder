import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ResumeSteps from './ResumeSteps'
import { useContext } from 'react'
import { MyContext } from '../App'


function Mainpage() {

    return (
        <Grid container>
            <Grid item container xs={12} spacing={4}>
                <Grid item xs={12}>
                    <AppBar position="static" color="secondary">
                        <Toolbar>
                            <Typography variant="h6" >
                                RESUME GENERATOR
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={12}>
                    <ResumeSteps />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Mainpage