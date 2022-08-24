import type { NextComponentType } from 'next';
import styled from 'styled-components';

import HeaderCard from './HeaderCard';
import { StyledDiv } from './Card';

const StyledText = styled.p`
  font-size: 1em;
`;

// For the explanation section of the main page

const HeaderTextCard: NextComponentType = () => (
  <>
    <HeaderCard text="To Put It Simply" />
    <StyledDiv>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
        molestiae totam nihil mollitia sequi sit aperiam rem voluptatem iure
        accusamus error eaque illo magnam similique sed unde libero veniam
        ratione! Dicta commodi fugit voluptate illum sapiente iure, repudiandae
        in nulla minima quos tenetur error harum obcaecati rem blanditiis. Quas
        veniam quibusdam eligendi fugit ipsa autem a vero praesentium non
        officiis! Libero facilis eius, et enim perferendis debitis dignissimos
        ipsum aperiam sapiente officia consequuntur quibusdam eos velit? Nemo
        fuga quasi aut accusamus beatae sit incidunt, odio quibusdam voluptas
        alias saepe dolorem.{' '}
      </StyledText>
    </StyledDiv>
  </>
);

export default HeaderTextCard;
