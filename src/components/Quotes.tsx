import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 50%;
`;

const StyledQuotes = styled.div`
  display: flex;
  flex-direction: column;
`;

function Quotes() {
  return (
    <StyledDiv>
      <StyledQuotes>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          esse dolorum sapiente exercitationem excepturi obcaecati quos modi
          culpa aliquid nulla, mollitia perferendis voluptatum, accusantium
          corrupti reprehenderit, quis vitae labore at?
        </p>
        <strong>ipsum lorem</strong>
      </StyledQuotes>
      <button>refresh</button>
    </StyledDiv>
  );
}

export default Quotes;
