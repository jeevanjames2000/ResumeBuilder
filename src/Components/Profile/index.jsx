import { Card, CardContent, CardHeader, Grid, TextField } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../App'

export default function Profile() {
    const Context = useContext(MyContext)
    const initialState = Context.profile
    console.log("initialState: ", initialState);
    const setState = Context.setProfile
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
                                        value={initialState.firstName}
                                        onChange={(e) => {
                                            setState({ ...initialState, firstName: e.target.value })
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="secondName"
                                        label="Second Name"
                                        variant="outlined"
                                        value={initialState.secondName}
                                        onChange={(e) => {
                                            setState({ ...initialState, secondName: e.target.value })
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        name="phone"
                                        label="Phone Number"
                                        variant="outlined"
                                        value={initialState.phoneNum}
                                        onChange={(e) => {
                                            setState({ ...initialState, phoneNum: e.target.value })
                                        }}
                                    />
                                </Grid>  <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="address"
                                        label="Address"
                                        variant="outlined"
                                        value={initialState.address}
                                        onChange={(e) => {
                                            setState({ ...initialState, address: e.target.value })
                                        }}
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
