import { Card, CardContent, CardHeader, Grid, TextField } from '@mui/material'
import React from 'react'

export default function Profile() {
    return (
        <>
            <form autoComplete="off" noValidate>

                <Card>
                    <CardHeader title="Add Profile Details" />
                    <CardContent>
                        <Grid container >
                            <Grid item container xs={12} spacing={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="firstName"
                                        label="First Name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="secondName"
                                        label="Second Name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        name="phone"
                                        label="Phone Number"
                                        variant="outlined"
                                    />
                                </Grid>  <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="address"
                                        label="Address"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="file"
                                        name="url"
                                        // onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
        </>
    )
}
