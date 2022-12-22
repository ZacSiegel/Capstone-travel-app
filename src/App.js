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

	const { 
		places,
		setPlaces,
		filteredPlaces,
		setFilteredPlaces,
		filteredRestaurants,
		setFilteredRestaurants,
		setCoordinates,
		bounds,
		darkMode,
		setDarkMode,
		mapStyle,
		setMapStyle,
		setIsLoading,
		type,
		rating,
	 } = useGlobalContext();

	// this is used to pull liked places from local storage to state value
	// so that they can be rendered on the list component
	const [likedPlaces, setLikedPlaces] = useState(() => {
		const likedPlaces = JSON.parse(localStorage.getItem('likedPlaces'));
		return likedPlaces ? likedPlaces : [];
	});

	// useeffect here is called when a new place is added/removed to/from liked places
	useEffect(() => {
		saveLikedPlaces(likedPlaces)
	}, [likedPlaces])

	// saves liked places to local storage
	const saveLikedPlaces = (likedPlaces) => {
		localStorage.setItem('likedPlaces', JSON.stringify(likedPlaces))
	}

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
			const fetchData = async () => {
				const data = await getPlacesData(type, bounds);
				setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
				setFilteredPlaces([]);
				setIsLoading(false);
			};
			fetchData();
		}
	}, [type, bounds]);

	return (
		<>
			<CssBaseline />
			<Header darkMode={darkMode} setDarkMode={setDarkMode} mapStyle={mapStyle} setMapStyle={setMapStyle} setCoordinates={setCoordinates} />
			<Grid className={darkMode ? 'darkmode-background' : 'lightmode-background'} container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={5}>
					<List
						filteredRestaurants={filteredRestaurants}
						setFilteredRestaurants={setFilteredRestaurants}
						likedPlaces={likedPlaces}
						setLikedPlaces={setLikedPlaces}
						places={filteredPlaces.length ? filteredPlaces : places}
					/>
				</Grid>
				<Grid item xs={12} md={7}>
					<Map
						places={filteredPlaces.length ? filteredPlaces : places}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default App;
