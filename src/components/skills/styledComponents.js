import styled from 'styled-components';
import { rem } from '../../utils';

/*
  == COMOPONENT SUMMARY ==
  --> Skills --> line 17
  --> TitleWrapper --> line 34
  --> Subtitle --> line 46
  --> SkillsContainer --> line 57
  --> SkillCategory --> line 72
  --> CategoryName --> line 90
  --> SkillsWrapper --> line 106
  --> SkillName --> line 119
*/

// Skills
export const Skills = styled.section`
  width: calc(100% - ${rem(72)});
  margin: 0 auto ${rem(60)};

  @media (min-width: ${rem(767)}) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    column-gap: ${rem(40)};
  }

  @media (min-width: ${rem(1279)}) {
    width: ${rem(1160)};
  }
`;

// TitleWrapper
export const TitleWrapper = styled.div`
  width: ${rem(320)};
  margin: 0 auto ${rem(50)};
  text-align: center;

  @media (min-width: ${rem(767)}) {
    margin: 0;
    text-align: left;
  }
`;

// Subtitle
export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: ${rem(20)};
  color: var(--black);

  @media (min-width: ${rem(767)}) {
    font-size: ${rem(24)};
  }
`;

// SkillsContainer
export const SkillsContainer = styled.div`
  @media (min-width: ${rem(767)}) {
    width: ${rem(300)};
  }
  
  @media (min-width: ${rem(1023)}) {
    width: ${rem(500)};
  }
  
  @media (min-width: ${rem(1279)}) {
    width: auto;
  }
`;

// SkillCategory
export const SkillCategory = styled.div`
  width: 100%;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: ${rem(20)};
  }

  @media (min-width: ${rem(767)}) {
    text-align: left;

    &:not(:last-child) {
      margin-bottom: ${rem(30)};
    }
  }
`;

// CategoryName
export const CategoryName = styled.h3`
  font-size: ${rem(22)};
  color: var(--black);
  margin-bottom: ${rem(16)};

  @media (min-width: ${rem(767)}) {
    font-size: ${rem(24)};
    margin-bottom: ${rem(20)};
  }

  @media (min-width: ${rem(1023)}) {
    font-size: ${rem(28)};
  }
`;

// SkillsWrapper
export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${rem(16)};

  @media (min-width: ${rem(767)}) {
    justify-content: flex-start;
  }
`;

// SkillName
export const SkillName = styled.span`
  display: inline-block;
  font-size: ${rem(20)};
  color: var(--white);
  background-color: var(--half-purple);
  padding: ${rem(3)} ${rem(12)};
  border: solid 1px var(--purple);

  @media (min-width: ${rem(1023)}) {
    font-size: ${rem(24)};
  }
`;