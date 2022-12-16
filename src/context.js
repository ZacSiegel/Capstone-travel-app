import React, { useState, useContext } from "react";

// map styles
import mapLightModeStyles from './mapLightModeStyles'
import mapDarkModeStyles from "./mapDarkModeStyles";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [showRestaurants, setShowRestaurants] = useState(true);

    // dark mode styles
    const [darkMode, setDarkMode] = useState(false)
    const [mapStyle, setMapStyle] = useState(mapLightModeStyles);

    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("0");


    // Filter options
    // 1. for showing liked places 
    const [showLikedPlaces, setShowLikedPlaces] = useState(false);
    // 2. for showing places with matching tags
    const [restaurantTag, setRestaurantTag] = useState('');

    return <AppContext.Provider value={{
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
        setRating,
        showLikedPlaces,
        setShowLikedPlaces,
        restaurantTag,
        setRestaurantTag
    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext);
};
