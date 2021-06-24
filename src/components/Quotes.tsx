import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeState, quoteState } from '../recoil';
import styled from 'styled-components';
import Spinner from './Spinner';

import style from '../styles/components/Quotes.module.scss';

function Quotes() {
  const active = useRecoilValue(activeState);

  const Quote = () => {
    const [{ author, content }, refreshQuote] = useRecoilState(quoteState);
    return (
      <>
        <div className={`${style.quotes}`}>
          <p>{content}</p>
          <strong>{author}</strong>
        </div>
        <p>
          <img
            className={`${style.refreshbutton}`}
            src="assets/refresh-icon.png"
            style={{ objectFit: 'none' }}
            onClick={() => refreshQuote({ author, content })}
          />
        </p>
      </>
    );
  };

  return (
    <div className={`${style.container} ${style[active ? 'none' : 'active']}`}>
      <React.Suspense fallback={<Spinner />}>
        <Quote />
      </React.Suspense>
    </div>
  );
}

export default Quotes;
