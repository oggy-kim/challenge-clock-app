// api : https://ipapi.co/api
// ipinfo.io

import axios from 'axios';

export const getMyPosition = async (ip: string) => {
    const { data: { latitude, longitude, region, country }} = await axios.get(`https://ipapi.co/${ip}/json`);
    return {latitude, longitude,region, country };
}