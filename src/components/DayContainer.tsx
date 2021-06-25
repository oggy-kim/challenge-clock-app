import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { activeState, timeState } from '../recoil';
import style from '../styles/components/DayContainer.module.scss';

function DayContainer({ day }) {
  const active = useRecoilValue(activeState);
  console.log(day);

  const DayDetail = () => {
    const data = useRecoilValue(timeState);
    const { timezone, day_of_week, day_of_year, week_number } = data;
    let items = [
      { title: 'CURRENT TIMEZONE', value: timezone },
      { title: 'DAY OF THE WEEK', value: day_of_week },
      { title: 'DAY OF THE YEAR', value: day_of_year },
      { title: 'WEEK NUMBER', value: week_number },
    ];
    console.log(items);

    return (
      <>
        {items.map(({ title, value }) => {
          return (
            <div key={title}>
              <p>{title}</p>
              <h1>{value}</h1>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className={`${style.daycontainer} ${style[day]} ${style[active ? 'active' : 'none']}`}>
      <React.Suspense fallback={<div></div>}>
        <DayDetail />
      </React.Suspense>
    </div>
  );
}

export default DayContainer;
