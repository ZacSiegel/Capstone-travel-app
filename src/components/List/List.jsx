import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();

  // this will print something more meaningful such as childClicked: 5
  console.log({ childClicked });
  // Doing like this may just print value to the console with no context
  // console.log(childClicked);


  // This function gets the elements index number to be used for scrolling to it in the place details
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [type, places]);

  console.log(type);
  console.log(places);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels and Attractions</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
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
                <Grid ref={elRefs[i]} item key={i} xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
