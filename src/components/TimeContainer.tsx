import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeState, timeState, locationState, greetingState } from '../recoil';

import styled from 'styled-components';
import { clockFormat } from '../util/timeFormat';
import dayjs from 'dayjs';
import Spinner from './Spinner';
import style from '../styles/components/TimeContainer.module.scss';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

// TODO : 내부 로직 및 component 분리 고려
function TimeContainer({ setDay }) {
  const [active, setActive] = useRecoilState(activeState);

  const Greeting = () => {
    const { datetime } = useRecoilValue(timeState);
    const { sunset, sunrise } = useRecoilValue(greetingState);

    const translatedTime = dayjs(datetime).format('HH:mm:ss');
    const sunriseTime = dayjs(sunrise).format('HH:mm:ss');
    const sunsetTime = dayjs(sunset).format('HH:mm:ss');
    const flag = translatedTime > sunriseTime && translatedTime < sunsetTime;
    setDay(flag ? 'day' : 'night');
    return flag ? (
      <span className={`${style.word}`}>🌞 GOOD MORNING, IT'S CURRENTLY</span>
    ) : (
      <span className={`${style.word}`}>🌕 GOOD NIGHT, IT'S CURRENTLY</span>
    );
  };

  const Geolocation = () => {
    const { datetime } = useRecoilValue(timeState);
    const { region, country } = useRecoilValue(locationState);

    return (
      <span className={`${style.word}`}>
        <strong>
          IN {region.toUpperCase()}, {country.toUpperCase()}
        </strong>
      </span>
    );
  };

  const Clock = () => {
    const { abbreviation } = useRecoilValue(timeState);

    return (
      <span>
        <span className={`${style.clock}`}>{clockFormat(new Date())}</span>
        {abbreviation}
      </span>
    );
  };

  const ToggleButton = () => {
    return (
      <button
        className={`${style.togglebutton} ${style[active ? 'active' : 'none']}`}
        onClick={handleToggle}
      >
        <span style={{ fontSize: '15px', marginRight: '5px' }}>{!active ? 'MORE' : 'LESS'}</span>
        <img src="assets/icon-arrow-up.png" width="30px" />
      </button>
    );
  };

  const handleToggle = () => {
    setActive(active => !active);
  };

  return (
    <div className={`${style.container} ${style[active ? 'none' : 'active']}`}>
      <StyledDiv>
        <React.Suspense fallback={<Spinner />}>
          <Greeting />
        </React.Suspense>
        <React.Suspense fallback={<Spinner />}>
          <Clock />
        </React.Suspense>
        <React.Suspense fallback={<Spinner />}>
          <Geolocation />
        </React.Suspense>
      </StyledDiv>
      <ToggleButton />
    </div>
  );
}

export default TimeContainer;
