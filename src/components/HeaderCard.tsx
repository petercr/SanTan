import type { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface Props {
  text: string;
  typeElm: string | null | undefined;
}

const StyledDiv = styled.div`
  background: radial-gradient(
        189.33% 1713.8% at 102.67% -29.78%,
        rgba(254, 133, 254, 0.23) 0%,
        rgba(252, 252, 252, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    rgba(255, 255, 255, 0.99);
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  border: 1px solid #000000;
  padding: 1em;
  margin: 2em;
  min-width: 250px;
  text-align: center;

  h1 {
    font-size: 40px;
    color: black;
  }
`;

const HeaderCard: FunctionComponent<Props> = ({ text, typeElm }) => {
  switch (typeElm) {
    case 'h1':
      return (
        <StyledDiv>
          <h1>{text}</h1>
        </StyledDiv>
      );
    case 'h2':
      return (
        <StyledDiv>
          <h2>{text}</h2>
        </StyledDiv>
      );
    case 'h3':
      return (
        <StyledDiv>
          <h3>{text}</h3>
        </StyledDiv>
      );
    case 'h4':
      return (
        <StyledDiv>
          <h4>{text}</h4>
        </StyledDiv>
      );
    default:
      return (
        <StyledDiv>
          <h1>{text}</h1>
        </StyledDiv>
      );
  }
};

HeaderCard.propTypes = {
  text: PropTypes.string.isRequired,
  typeElm: PropTypes.string,
};

export default HeaderCard;
