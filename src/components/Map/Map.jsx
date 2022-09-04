import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from './styles';


const Map = ({setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();
    // switches to mobile view when viewport is <= 600px 
    const isMobile = useMediaQuery('(min-width:600px)');
    // const coordinates = { lat: 40.73, lng: -93.93 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCbVTsRTIDBr_CQSN9Z7d1eDsHdxXaDkT4' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={10}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map;