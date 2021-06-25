import * as React from 'react';

import '../styles/style.global.scss';
import style from '../styles/components/App.module.scss';
import Quotes from './Quotes';
import TimeContainer from './TimeContainer';

import DayContainer from './DayContainer';

function App() {
  const [day, setDay] = React.useState<'loading' | 'day' | 'night'>('loading');

  const LoadingDiv = () => {
    return <div className={`${style.loading}`} />;
  };

  const BackgroundDiv = ({ children }) => {
    return <div className={`${style.background} ${style[day]}`}>{children}</div>;
  };

  return (
    <React.Suspense fallback={<LoadingDiv />}>
      <BackgroundDiv>
        <div className={`${style.container}`}>
          <Quotes />
          <TimeContainer setDay={setDay} />
          <DayContainer day={day} />
        </div>
      </BackgroundDiv>
    </React.Suspense>
  );
}

export default App;
