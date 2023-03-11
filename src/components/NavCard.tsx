import type { NextComponentType } from 'next';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.81);
  border: 1px solid #000000;
  box-shadow: 8px 7px 8px rgba(0, 0, 0, 0.29);
  border-radius: 20px;
  padding: 1rem;
  margin-top: 2rem;
`;

const NavCard: NextComponentType = () => (
  <StyledDiv>
    <p>Scroll For More</p>
    {/* Put in the chevron icon, and animate it */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      height={50}
      width={50}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
  </StyledDiv>
);

export default NavCard;
