import * as React from 'react';
import { RecoilRoot } from 'recoil';

import '../styles/style.global.scss';
import style from '../styles/components/App.module.scss';
import Quotes from './Quotes';
import TimeContainer from './TimeContainer';
import Spinner from '../components/Spinner';

function App() {
  return (
    <RecoilRoot>
      <div className={`${style.container} ${style.day}`}>
        <React.Suspense fallback={<Spinner />}>
          <Quotes />
        </React.Suspense>
        <React.Suspense fallback={<Spinner />}>
          <TimeContainer />
        </React.Suspense>
      </div>
    </RecoilRoot>
  );
}

export default App;
