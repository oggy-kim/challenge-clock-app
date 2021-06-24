// api : https://ipapi.co/api
// ipinfo.io

import axios from 'axios';

export const getMyPosition = async (ip: string) => {
  // api 과다 요청 방지를 위한 임시값 설정
  // const { data: { latitude, longitude, region, country }} = await axios.get(`https://ipapi.co/${ip}/json`);
  const latitude = 37;
  const longitude = 127;
  const region = 'seoul';
  const country = 'KR';
  return { latitude, longitude, region, country };
};
