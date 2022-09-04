import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

// const options = {
//     params: {
//         latitude: '12.91285',
//         longitude: '100.87808',
//     },
//     headers: {
//         'X-RapidAPI-Key': 'd233c9fd53mshf8795848c0ac9d2p1b5628jsn9065885eb5f7',
//         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

export const getPlacesData = async (ne, sw) => {
    try {
        // request to get places data
        const { data: { data } } = await axios.get(URL, {
            params: {
                latitude: '12.91285',
                longitude: '100.87808',
            },
            headers: {
                'X-RapidAPI-Key': 'd233c9fd53mshf8795848c0ac9d2p1b5628jsn9065885eb5f7',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error)
    }
}