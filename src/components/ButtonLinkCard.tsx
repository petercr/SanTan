import type { NextComponentType } from 'next';
import styled from 'styled-components';
import HeaderCard from './HeaderCard';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 1em;

  & button {
    color: #fff;
    background: #0099ff;
    box-shadow: -3px 4px 3px rgba(0, 0, 0, 0.53);
    border-radius: 20px;
    padding: 0.5em 1em;
  }
`;

const ButtonLinkCard: NextComponentType = () => (
  <>
    <HeaderCard text="Here's How We Can Help You" />
    <StyledDiv>
      <p>Check out some customer testimonials.</p>
      <button type="button">Testimonials</button>
      <p>Want to see some of our work in action.</p>
      <button type="button">Our Work</button>
      <p>Want to get in touch with us, here’s how. </p>
      <button type="button">Contact Us</button>
    </StyledDiv>
  </>
);

export default ButtonLinkCard;
