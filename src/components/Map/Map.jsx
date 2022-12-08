import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";


const Map = ({ darkMode, setCoordinates, setBounds, coordinates, places, setChildClicked, mapStyle }) => {
	const classes = useStyles();
	// switches to mobile view when viewport is <= 600px
	const isDesktop = useMediaQuery("(min-width:600px)");
	// const coordinates = { lat: 40.73, lng: -93.93 };
	return (
		
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={12}
				margin={[50, 50, 50, 50]}
				options={{disableDefaultUI: true, zoomControl: true, styles: mapStyle}}
				onChange={(e) => {
					// console.log(e);
					setCoordinates({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
				}}
				onChildClick={(child) => setChildClicked(child)}>
				{places?.map((place, index) => {
					return (
						<div
							className={classes.markerContainer}
							lat={Number(place.latitude)}
							lng={Number(place.longitude)}
							key={index}>
							{!isDesktop ? (
								<LocationOnOutlinedIcon color="primary" fontSize="large" />
							) : (
								<Paper elevation={3} className={darkMode ? classes.darkPaper : classes.paper}>
									<Typography
										className={classes.typography}
										variant="subtitle2"
										gutterBottom>
										{place.name}
									</Typography>
									<img
										className={classes.pointer}
										src={
											place.photo
												? place.photo.images.large.url
												: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
										}
										alt={place.name}
									/>
									<Rating size="small" value={Number(place.rating)} readOnly />
								</Paper>
							)}
						</div>
					);
				})}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
