import type { NextComponentType } from 'next';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.81);
  border: 1px solid #000000;
  box-shadow: 8px 7px 8px rgba(0, 0, 0, 0.29);
  border-radius: 20px;
  gap: 0.25rem;
`;

const StyledSocialDiv = styled.div`
  flex-direction: row;
  & a {
    margin: 0.5rem;
  }
`;

const SocialLinksCard: NextComponentType = () => (
  <StyledDiv>
    <p> Social Links</p>
    <StyledSocialDiv>
      <SocialIcon url="https://twitter.com/petecapecod" />
      <SocialIcon url="https://www.facebook.com/peter.cruckshank/" />
      <SocialIcon url="https://www.instagram.com/petecapecod/" />
      <SocialIcon url="https://github.com/petercr" />
    </StyledSocialDiv>
  </StyledDiv>
);

export default SocialLinksCard;
