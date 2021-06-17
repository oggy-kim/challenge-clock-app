// http://worldtimeapi.org
// https://sunrise-sunset.org/api

import axios from "axios";

export const getCurrentTime = async () => {
    const { data } = await axios.get(`http://worldtimeapi.org/api/ip`);
    return data;
}
