# README

# Live Demo
- Allow the browser to use your current location or the map will not load upon the initial render.
- If the users location is not shared, type a city into the search bar to select for the first map render.
- https://trip-tips.netlify.app/

# Capstone Travel Advisor web app
This repository is for a trip advisor capstone project.
The goal of this project is to create a web app that users can search for locations on and view the businesses available in that area.
Users have numerous means of filtering places that are shown
Users can save liked places and view them seperately.
App features a dark mode

It relies heavily upon the following API's:
- Travel advisor API from rapid api (https://rapidapi.com/apidojo/api/travel-advisor/)
- Google Maps JavaScript API 
- Google Places API

# Note on hotels filter option
12/17/22
- There is a bug with the travel advisor API when choosing hotels as an option. For some reason, sometimes the GET request works and other times it does not. The method by which the response is obtained is through boundary latitude and longitude. This method is deprecated according to the api docs but still works as intended for restaurants and attractions. 

# Change log
09/04/22

Most of the UI for the main/home page has been developed:
- Header with a a search bar at the top of the page. This will eventually be used for navigation to other pages also.
- Sidebar on left side of the page that will display information for businesses
- The map that users will be able to interact with located on the right side of the page. 

09/25/22


- Users can view places of interest on the actual Google Map
- More detailed cards for clicked locations are now shown on the lefthand side of the page
- Filter function implemented to filter places by classification of restaurant, hotel or attraction.
- Filter functionality based on ratings of places


10/28/22

- Autocomplete for search bar now works as intended for selected city
- Began working on implementing a dark mode for the app. Completed dark mode for header and map. 


11/25/22

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

12/17/22
- Further work done on context api refactoring.

12/22/22
- Refactor completed for context api integration.
- Adjusted styling on restaurant tag.

12/23/22
- Styling adjusted for input fields. Still issues with dark mode styling.