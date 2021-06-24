import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { activeState } from '../recoil';
import style from '../styles/components/DayContainer.module.scss';

function DayContainer() {
  const active = useRecoilValue(activeState);

  return (
    <div className={`${style.daycontainer} ${style[active ? 'active' : 'none']}`}>
      <p>?</p>
    </div>
  );
}

export default DayContainer;
