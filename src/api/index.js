import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const options = 

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

export const getPlacesData = async (type, bounds) => {
    let {sw, ne} = bounds;
    try {
        // request to get places data
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
                // bl_latitude: '11.847676',
                // bl_longitude: '108.473209',
                // tr_longitude: '109.149359',
                // tr_latitude: '12.838442',
            },
            headers: {
                'X-RapidAPI-Key': '1afa0cb45fmshc72f7d6bc0840ecp1d1a6bjsn37b5b1b95068',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        
        // console.log(sw, ne);
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

// export const getWeatherData = async () => {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=hercules&units=imperial&appid=0d8e3f5586eddf8425d1eb952e4b5993`)
//         const data = await response.json()
//         return data
        
//     } catch (error) {
//         console.log(error);
//     }
// };



