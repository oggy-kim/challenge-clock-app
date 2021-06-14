import * as React from 'react';
import styled from 'styled-components';
import Quotes from './Quotes';
import TimeContainer from './TimeContainer';
import img from '../assets/desktop/bg-image-daytime.jpg';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  padding: 50px 100px 50px 100px;
  background-image: url(${img});
  background-size: cover;
`;

function App() {
  return (
    <StyledContainer>
      <Quotes />
      <TimeContainer />
    </StyledContainer>
  );
}

export default App;
