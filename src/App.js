import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

//Components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  // this useEffect function get's the users current location from the browser, only runs once at the start of the app
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => {
      if (place.rating > rating) {
        return place;
      }
    });
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  // this useEffect function fetches data from the api based on location and type of business selected
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds).then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
      // console.log(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        {/* List of details about businesses will only take up 1/3 of the screen on large screens
                It will take up the whole screen on small screens (12) */}
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
