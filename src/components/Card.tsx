import { FunctionComponent } from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.81);
  border: 1px solid #000000;
  box-shadow: 8px 7px 8px rgba(0, 0, 0, 0.29);
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
`;

const Card: FunctionComponent = () => (
  <StyledDiv>
    <h1>Cape Cod World</h1>
    <p>Bringing Your Ideas To The World 🌎</p>
  </StyledDiv>
);

export default Card;
