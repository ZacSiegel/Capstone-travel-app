# README

# Live Demo
- https://trip-tips.netlify.app/

# Capstone Travel Advisor web app
This repository is for a travel advisor capstone project.
The goal of this project is to create a web app that users can search for locations on and view the businesses available in that area.
Users can save liked places and view them seperately.

It relies heavily upon the following API's:
- Travel advisor API from rapid api (https://rapidapi.com/apidojo/api/travel-advisor/)
- Google Maps JavaScript API 
- Google Places API



09/04/22
Most of the UI for the main/home page has been developed. 

UI componentes on main page include:
- Header with a a search bar at the top of the page. This will eventually be used for navigation to other pages also.
- Sidebar on left side of the page that will display information for businesses
- The map that users will be able to interact with located on the right side of the page. \

09/25/22
The functionality for the main page of the application is nearly completed. 
- Users can view places of interest on the actual Google Map
- More detailed cards for clicked locations are now shown on the lefthand side of the page
- Filter function implemented to filter places by classification of restaurant, hotel or attraction.
- Filter functionality based on ratings of places


10/28/22
Functionality updated for main page.
- Autocomplete for search bar now works as intended for selected city
- Began working on implementing a dark mode for the app. Completed dark mode for header and map. 


11/25/22
Functionality updated for main page
- Dark mode completed for app. Users can toggle between dark mode and light mode using a switch in the header
- Implemented like functionality for places. When a user likes a restaurant, hotel or attraction, that place gets saved in local storage within the browser. The user can then view saved places using a switch labeled "liked places". 


12/08/22
- Added .env file to protect API keys
- Also added new styling for MUI switches to fit color theme

12/14/22
- Added new custom filter feature for restaurants
- Users can enter restaurant tags to filter restaurants by types of food served


12/15/22
- Began working on refactor to incorporate context API for global state management.