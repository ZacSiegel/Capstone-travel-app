import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

// context api for state values
import { useGlobalContext } from "./context";

//Components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

// map styles
import mapLightModeStyles from './mapLightModeStyles'
import mapDarkModeStyles from "./mapDarkModeStyles";

const App = () => {
	// const [places, setPlaces] = useState([]);
	// const [filteredPlaces, setFilteredPlaces] = useState([]);
	// const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	// const [coordinates, setCoordinates] = useState({});
	// const [bounds, setBounds] = useState(null);
	// const [showRestaurants, setShowRestaurants] = useState(true);

	const { 
		places,
		setPlaces,
		filteredPlaces,
		setFilteredPlaces,
		filteredRestaurants,
		setFilteredRestaurants,
		coordinates,
		setCoordinates,
		bounds,
		setBounds,
		showRestaurants,
		setShowRestaurants,
		darkMode,
		setDarkMode,
		mapStyle,
		setMapStyle,
		childClicked,
		setChildClicked,
		isLoading,
		setIsLoading,
		type,
		setType,
		rating,
		setRating
	 } = useGlobalContext();



	// dark mode styles
	// const [darkMode, setDarkMode] = useState(false)
	// const [mapStyle, setMapStyle] = useState(mapLightModeStyles);

	// const [childClicked, setChildClicked] = useState(null);
	// const [isLoading, setIsLoading] = useState(false);

	// const [type, setType] = useState("restaurants");
	// const [rating, setRating] = useState("0");


	const [likedPlaces, setLikedPlaces] = useState(() => {
		const likedPlaces = JSON.parse(localStorage.getItem('likedPlaces'));
		return likedPlaces ? likedPlaces : [];
	});


	useEffect(() => {
		// console.log(likedPlaces)
		saveLikedPlaces(likedPlaces)
	}, [likedPlaces])

	const saveLikedPlaces = (likedPlaces) => {
		localStorage.setItem('likedPlaces', JSON.stringify(likedPlaces))
	}


	console.log(likedPlaces)



	// useEffect for toggling dark mode
	useEffect(() => {
		if (darkMode) {
			setMapStyle(mapDarkModeStyles)
		} else {
			setMapStyle(mapLightModeStyles)
		}
	}, [darkMode])



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
		if (bounds) {
			setIsLoading(true);


			getPlacesData(type, bounds).then((data) => {
				setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
				setFilteredPlaces([]);
				// console.log(data);
				setIsLoading(false);
			});
		}
	}, [type, bounds]);

	return (
		<>
			<CssBaseline />
			<Header darkMode={darkMode} setDarkMode={setDarkMode} mapStyle={mapStyle} setMapStyle={setMapStyle} setCoordinates={setCoordinates} />
			<Grid className={darkMode ? 'darkmode-background' : 'lightmode-background'} container spacing={3} style={{ width: "100%" }}>
				{/* List of details about businesses will only take up 1/3 of the screen on large screens
                It will take up the whole screen on small screens (12) */}
				<Grid item xs={12} md={4}>
					<List
						showRestaurants={showRestaurants}
						setShowRestaurants={setShowRestaurants}
						filteredRestaurants={filteredRestaurants}
						setFilteredRestaurants={setFilteredRestaurants}
						likedPlaces={likedPlaces}
						setLikedPlaces={setLikedPlaces}
						darkMode={darkMode}
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
						darkMode={darkMode}
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						coordinates={coordinates}
						places={filteredPlaces.length ? filteredPlaces : places}
						setChildClicked={setChildClicked}
						mapStyle={mapStyle}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default App;
