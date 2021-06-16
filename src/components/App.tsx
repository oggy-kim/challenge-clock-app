import * as React from 'react';
import styled from 'styled-components';
import Quotes from './Quotes';
import TimeContainer from './TimeContainer';
import img from '../assets/desktop/bg-image-daytime.jpg';
import { RecoilRoot } from 'recoil';
import Spinner from '../components/Spinner';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  padding: 50px 100px 50px 100px;
  background-image: url(${img});
  background-size: cover;
`;

// TODO 공통 : SCSS 적용 고려
function App() {
  return (
    <RecoilRoot>
      <StyledContainer>
        <React.Suspense fallback={<Spinner />}>
          <Quotes />
        </React.Suspense>
        <TimeContainer />
      </StyledContainer>
    </RecoilRoot>
  );
}

export default App;
