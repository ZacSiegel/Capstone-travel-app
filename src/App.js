import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';

//Components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";


const App = () => {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState();
    const [bounds, setBounds] = useState(null);

    // this useEffect function get's the users current location from the browser, only runs once at the start of the app
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);

    useEffect(() => {
        // console.log(coordinates, bounds); bounds.ne, bounds.sw
        getPlacesData()
            .then((data) => {
                // console.log(data);
                setPlaces(data);
            })
    }, [coordinates, bounds]);
    console.log(bounds);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                {/* List of details about businesses will only take up 1/3 of the screen on large screens
                It will take up the whole screen on small screens (12) */}
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>

            </Grid>
        </>
    );
}

export default App;