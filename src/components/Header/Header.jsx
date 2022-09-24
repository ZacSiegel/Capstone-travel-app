import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import useStyles from "./styles";


const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => {
        setAutocomplete(autoC)
    }

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates(lat, lng)
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                {/* typography is essentially every text element in the app */}
                <Typography variant="h5" className={classes.title}>
                    App name goes here
                </Typography>
                <Box display="flex">
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        {/* this is the searchbar */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Enter location here..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                    <CalendarMonthIcon />
                    <PersonIcon />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;