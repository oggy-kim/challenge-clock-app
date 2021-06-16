import * as React from 'react';
import { useRecoilState } from 'recoil';
import { quoteState } from '../recoil';
import styled from 'styled-components';
import refreshSVG from '../assets/refresh-icon.png';

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StyledQuotes = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
`;

function Quotes() {
  const [{ author, content }, refreshQuote] = useRecoilState(quoteState);

  return (
    <StyledDiv>
      <StyledQuotes>
        <p>{content}</p>
        <strong>{author}</strong>
      </StyledQuotes>
      <p>
        <img
          src={refreshSVG}
          style={{ objectFit: 'none' }}
          onClick={() => refreshQuote({ author, content })}
        />
      </p>
    </StyledDiv>
  );
}

export default Quotes;
