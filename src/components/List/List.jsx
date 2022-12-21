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
import { alpha, styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import { useGlobalContext } from "../../context";

const List = ({ filteredRestaurants, setFilteredRestaurants, likedPlaces, setLikedPlaces, places, childClicked}) => {
	const classes = useStyles();

	const { 
		showLikedPlaces, 
		setShowLikedPlaces,
		restaurantTag,
		setRestaurantTag,
		darkMode,
		isLoading, 
		type,
		setType,
		rating,
		setRating,
		showRestaurants,
		setShowRestaurants,
	} = useGlobalContext();



	// This function gets the elements index number to be used for scrolling to it in the place details
	const [elRefs, setElRefs] = useState([]);
	useEffect(() => {
		const refs = Array(places?.length)
			.fill()
			.map((_, i) => elRefs[i] || createRef());
		setElRefs(refs);
	}, [type, places]);


	// useEffect here is used to determine if the filtered restaurants should be shown
	// based on the type of place selected
	// if they type of place is changed to attraction or hotel, it resets this
	useEffect(() => {
		if (type !== 'restaurants') {
			setFilteredRestaurants([])
			setShowRestaurants(false)
		} else if (type === 'restaurants') {
			setShowRestaurants(true)
		}
	}, [type])


	// filters restaurants based on the tag entered
	const filterRestaurants = () => {
		let filtered = []
		let tag = restaurantTag.toLowerCase()
		for (let place of places) {
			place.cuisine.forEach(element => {
				if (element.name.toLowerCase().includes(tag)) {
					console.log(element)
					filtered.push(place)
				}
			});
		}
		setFilteredRestaurants(filtered)
	}

	// deletes restaurant chip tag and resets filtered restaurants
	const handleDelete = () => {
		setRestaurantTag('')
		setFilteredRestaurants([])
	}


	// renders the list of places based on one of 3 conditions:
	// 1. if the showLikedPlaces state is true, it will render the liked places
	// 2. if the showLikedPlaces state is false, and there is a filter applied, it will render the filtered restaurants
	// 3. if the showLikedPlaces state is false, and there is no filter applied, it will render all places loaded from api
	const handleRender = () => {
		if (showLikedPlaces) {
			return likedPlaces.map((place, i) => (
				<Grid ref={elRefs[i]} item key={i} xs={12}>
					<PlaceDetails
						likedPlaces={likedPlaces}
						setLikedPlaces={setLikedPlaces}
						place={place}
						selected={Number(childClicked) === i}
						refProp={elRefs[i]}
					/>
				</Grid>
			));
		} else if (!showLikedPlaces && filteredRestaurants.length > 0 && type === 'restaurants') {
			return filteredRestaurants.map((place, i) => (
				<Grid ref={elRefs[i]} item key={i} xs={12}>
					<PlaceDetails
						place={place}
						selected={Number(childClicked) === i}
						refProp={elRefs[i]}
					/>
				</Grid>
			));
		} else {
			setShowLikedPlaces(false)
			return (
				places?.map((place, i) => {
					return (
						<Grid ref={elRefs[i]} item key={i} xs={12}>
							<PlaceDetails
								likedPlaces={likedPlaces}
								setLikedPlaces={setLikedPlaces}
								darkMode={darkMode}
								place={place}
								selected={Number(childClicked) === i}
								refProp={elRefs[i]}
							/>
						</Grid>
					);
				})
			)
		}
	}



	return (
		<div className={darkMode ? classes.darkModeContainer : classes.container}>
			<Typography variant="h6">Filter by type & rating</Typography>
			{isLoading ? (
				<div className={classes.loading}>
					<CircularProgress size="8rem" />
				</div>
			) : (
				<>
					<div className="filter-and-liked-places-wrapper">
						<div className="filter-wrapper">
							<FormControl >
								<InputLabel className={darkMode ? classes.darkModeFormControl : classes.lightModeFormControl}>Type</InputLabel>
								{/* This will set the type state value to the value of the selected menu item */}
								<Select className={darkMode ? classes.darkModeFormControl : classes.lightModeFormControl} label='type' value={type} onChange={(e) => setType(e.target.value)}>
									<MenuItem value="restaurants">Restaurants</MenuItem>
									<MenuItem value="hotels">Hotels</MenuItem>
									<MenuItem value="attractions">Attractions</MenuItem>
								</Select>
							</FormControl>
							{/* Filter option to check ratings */}
							<FormControl >
								<InputLabel className={darkMode ? classes.darkModeFormControl : classes.lightModeFormControl}>Rating</InputLabel>
								{/* This will set the rating state value to the value of the selected menu item */}
								<Select className={darkMode ? classes.darkModeFormControl : classes.lightModeFormControl} label='rating' value={rating} onChange={(e) => setRating(e.target.value)}>
									<MenuItem value={0}>All</MenuItem>
									<MenuItem value={3}>Above 3.0</MenuItem>
									<MenuItem value={4}>Above 4.0</MenuItem>
									<MenuItem value={4.5}>Above 4.5</MenuItem>
								</Select>
							</FormControl>
						</div>
						{/* <FormGroup> */}
						<FormControlLabel
							control={<Switch />}
							label="Liked places"
							onChange={() => setShowLikedPlaces(!showLikedPlaces)}
						/>
						{showRestaurants ?
							<div className={darkMode ? classes.filterRestaurantsWrapperDarkMode : classes.filterRestaurantsWrapper}>
								<TextField
									className={darkMode ? classes.darkModeTextField : classes.lightModeTextField}
									margin="normal"
									id="outlined-basic"
									label="Restaurant tag"
									variant="outlined"
									onChange={(e) => setRestaurantTag(e.target.value)}

								/>
								<IconButton aria-label="add an alarm">
									<SearchIcon className={darkMode ? classes.searchBtnDark : classes.searchBtnLight} onClick={filterRestaurants} />
								</IconButton>
							</div>
							: 
							null
						}

						{filteredRestaurants.length > 0 && restaurantTag !== ''
							?
							<Stack direction="row" spacing={1}>
								<Chip
									className={darkMode ? classes.darkModeChip : classes.lightModeChip}
									label={restaurantTag}
									onDelete={handleDelete}
									variant="outlined"
								/>
							</Stack>
							:
							null
						}


					</div>
					{/* </FormGroup> */}
					<Grid container spacing={3} className={classes.list}>
						{
							isLoading ? null : handleRender()
						}
					</Grid>
				</>
			)}
		</div>
	);
};

export default List;
