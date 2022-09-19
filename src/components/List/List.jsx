import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from "./styles";

import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places}) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    // const places = [
    //     { name: 'Cool place' },
    //     { name: 'Best place' },
    //     { name: 'Bestest place' }
    // ];

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels and Attractions</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                {/* This will set the type state value to the value of the selected menu item */}
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            {/* Filter option to check ratings */}
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                {/* This will set the rating state value to the value of the selected menu item */}
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => {
                    return (
                        <Grid item key={i} xs={12}>
                            <PlaceDetails place={place}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default List;