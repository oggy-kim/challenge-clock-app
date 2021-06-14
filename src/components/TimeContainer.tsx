import * as React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  font-size: 20px;
`;

const StyledClockSpan = styled.span`
  font-size: 100px;
`;

function TimeContainer() {
  const Greeting = () => {
    return <StyledSpan>GOOD MORNING, IT'S CURRENTLY</StyledSpan>;
  };

  const Geolocation = () => {
    return <StyledSpan>IN LONDON, UK</StyledSpan>;
  };

  const Clock = () => {
    return (
      <span>
        <StyledClockSpan>11:37</StyledClockSpan>
        BST
      </span>
    );
  };

  return (
    <StyledDiv>
      <Greeting />
      <Clock />
      <Geolocation />
    </StyledDiv>
  );
}

export default TimeContainer;
