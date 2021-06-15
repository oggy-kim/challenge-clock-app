import * as React from 'react';

import styled from 'styled-components';

import img from '../assets/icon-arrow-up.png';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const StyledSpan = styled.span`
  font-size: 20px;
`;

const StyledClockSpan = styled.span`
  font-size: 150px;
  font-weight: 600;
  margin-right: auto;
  margin-bottom: 0;
`;

const StyledBottomDiv = styled.div`
  margin-top: auto;
  display: flex;
  align-items: flex-end;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 50px;
  width: 100px;
  height: 50px;
  color: #2a2a2a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// TODO : 내부 로직 및 component 분리 고려
function TimeContainer() {
  const [active, setActive] = React.useState(false);

  const Greeting = () => {
    return <StyledSpan>GOOD MORNING, IT'S CURRENTLY</StyledSpan>;
  };

  const Geolocation = () => {
    return (
      <StyledSpan>
        <strong>IN LONDON, UK</strong>
      </StyledSpan>
    );
  };

  const Clock = () => {
    return (
      <span>
        <StyledClockSpan>11:37</StyledClockSpan>
        BST
      </span>
    );
  };

  const ToggleButton = ({ active }: { active: boolean }) => {
    return (
      <StyledButton>
        <span style={{ fontSize: '15px', marginRight: '5px' }}>
          {!active ? 'MORE' : 'LESS'}
        </span>
        <img src={img} width="30px" />
      </StyledButton>
    );
  };

  return (
    <StyledBottomDiv>
      <StyledDiv>
        <Greeting />
        <Clock />
        <Geolocation />
      </StyledDiv>

      <ToggleButton active={active} />
    </StyledBottomDiv>
  );
}

export default TimeContainer;
