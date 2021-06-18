// http://worldtimeapi.org
// https://sunrise-sunset.org/api

import axios from "axios";

export const getCurrentTime = async () => {
    const { data } = await axios.get(`http://worldtimeapi.org/api/ip`);
    return data;
}

export const getSunPosition = async (latitude, longitude) => {
    const { data: { results : { sunset, sunrise }} } = await axios.get(`https://api.sunrise-sunset.org/json`, {
        params: {
            lat: latitude,
            lng: longitude,
            date: 'today',
            formatted: 0
        }
    });
    return { sunset, sunrise };
}
