import React from "react";
import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import useStyles from "./styles";

const PlaceDetails = ({ likedPlaces, setLikedPlaces, darkMode, place, selected, refProp }) => {
	//   console.log(place);

	const classes = useStyles();

	const savePlace = () => {
		// console.log(place)
		setLikedPlaces(likedPlaces => [...likedPlaces, place])
	}

	const removePlace = () => {
		console.log(likedPlaces)
		const filterSavedPlaces = likedPlaces.filter((savedPlace) => savedPlace.name !== place.name)
		setLikedPlaces(filterSavedPlaces)
	}
	
	if (selected)
		refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

	return (
		<Card elevation={6} className={darkMode ? classes.darkCard : classes.lightCard} >
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
				}
				title={place.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5">
					{place.name}
				</Typography>
				<Box display="flex" justifyContent="space-between">
					<Rating value={Number(place.rating)} readOnly />
					<Typography gutterBottom variant="subtitle1">
						out of {place.num_reviews} reviews
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">Price</Typography>
					<Typography gutterBottom variant="subtitle1">
						{place.price_level}
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">Ranking</Typography>
					<Typography gutterBottom variant="subtitle1">
						{place.ranking}
					</Typography>
				</Box>
				{place?.awards?.map((award) => (
					<Box
						my={1}
						display="flex"
						justifyContent="space-between"
						alignItems="center">
						<img src={award.images.small} alt={award.display_name} />
						<Typography variant="subtitle2" color="textSecondary">
							{award.display_name}
						</Typography>
					</Box>
				))}
				{place?.cuisine?.map(({ name }) => (
					<Chip key={name} size="small" label={name} className={classes.chip} />
				))}
				{place?.address && (
					<Typography
						gutterBottom
						variant="subtitle2"
						color="textSecondary"
						className={darkMode ? classes.darkSubtitle : classes.subtitle}>
						<LocationOnIcon /> {place.address}
					</Typography>
				)}
				{place?.phone && (
					<Typography
						gutterBottom
						variant="subtitle2"
						color="textSecondary"
						className={darkMode ? classes.darkSpacing : classes.spacing}>
						<PhoneIcon /> {place.phone}
					</Typography>
				)}
				<CardActions>
					<Button
						size="small"
						color="primary"
						onClick={() => (savePlace())}
					>
						<ThumbUpOffAltIcon
							className={darkMode ? classes.darkLike : classes.lightLike}
							fontSize="small" /> &nbsp; <span className={darkMode ? classes.darkLike : classes.lightLike}>Like &nbsp;</span>
						{/* {post.likeCount} */}
					</Button>
					<Button
						size="small"
						color="primary"
						onClick={() => (removePlace())}
					>
						<ThumbDownOffAltIcon
							className={darkMode ? classes.darkLike : classes.lightLike}
							fontSize="small" /> &nbsp; <span className={darkMode ? classes.darkLike : classes.lightLike}>Remove &nbsp;</span>
						{/* {post.likeCount} */}
					</Button>
				</CardActions>
				
				<CardActions>
					<Button
						size="small"
						className={darkMode ? classes.darkLink : classes.lightLink}
						onClick={() => window.open(place.web_url, "_blank")}>
						Trip Advisor
					</Button>
					<Button
						size="small"
						className={darkMode ? classes.darkLink : classes.lightLink}
						onClick={() => window.open(place.website, "_blank")}>
						Website
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default PlaceDetails;
