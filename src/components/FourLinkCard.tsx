import type { NextComponentType } from 'next';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 1em;

  a {
    color: #0c2bd9;
    text-decoration: underline;
    padding-bottom: 1em;
  }
`;

const FourLinkCard: NextComponentType = () => (
  <StyledDiv>
    <a href="#design">Design</a>
    <a href="#development">Development</a>
    <a href="#digital-content">Digital Content</a>
    <a href="#deployment">Deployment</a>
    <p>
      Click on any of the links above to find out more about what they mean.
    </p>
  </StyledDiv>
);

export default FourLinkCard;
