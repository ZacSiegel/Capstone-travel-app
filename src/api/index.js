import axios from "axios";

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
                // dummy coords
                // bl_latitude: '11.847676',
                // bl_longitude: '108.473209',
                // tr_longitude: '109.149359',
                // tr_latitude: '12.838442',
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
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





