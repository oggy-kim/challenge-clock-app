// api : https://ipapi.co/api
// ipinfo.io

import axios from 'axios';

export const getMyPosition = async (ip: string) => {
    const { data: {country, region}} = await axios.get(`https://ipapi.co/${ip}/json`);
    return {region, country };
}