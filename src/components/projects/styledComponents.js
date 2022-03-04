import styled from 'styled-components'
import { rem } from '../../utils'

/*
  == COMOPONENT SUMMARY ==
  --> ProjectsContainer --> line 19
  --> ProjectCard --> line 29
  --> ProjectThumbnail --> line 45
  --> ProjectDetails --> line 66
  --> ProjectTitle --> line 83
  --> ProjectDesc --> line 94
  --> ProjectSkills --> line 110
  --> SkillTag --> line 122
  --> ProjectLinks --> line 131
  --> ProjectLink --> line 134
*/

// ProjectsContainer
export const ProjectsContainer = styled.section`
  width: calc(100% - ${rem(72)});
  margin: 0 auto ${rem(60)};

  @media (min-width: ${rem(1279)}) {
    width: ${rem(964)};
  }
`;

// ProjectCard
export const ProjectCard = styled.div`
  background-color: var(--card-gray);
  box-shadow: 
    0px 3px 6px -2px rgba(0, 0, 0, 0.16),
    0px -3px 6px -2px rgba(0, 0, 0, 0.16);

  &:not(:last-child){
    margin-bottom: ${rem(40)};
  }

  @media (min-width: ${rem(767)}) {
    display: flex;
  }
`;

// ProjectThumbnail
export const ProjectThumbnail = styled.div`
  width: 100%;
  height: ${rem(300)};
  overflow: hidden;

  @media (min-width: ${rem(767)}) {
    width: ${rem(300)};
  }
  
  @media (min-width: ${rem(1023)}) {
    width: ${rem(376)};
    height: ${rem(367)};
  }

  img {
    width: 100%;
    height: auto;
  }
`;

// ProjectDetails
export const ProjectDetails = styled.div`
  padding: ${rem(16)};

  @media (min-width: ${rem(639)}) {
    padding: ${rem(16)} ${rem(62)};
  }
  @media (min-width: ${rem(767)}) {
    width: calc(100% - ${rem(300)});
    padding: ${rem(16)};
  }
  @media (min-width: ${rem(1023)}) {
    width: calc(100% - ${rem(376)});
    padding: ${rem(24)} ${rem(32)};
  }
`;

// ProjectTitle 
export const ProjectTitle = styled.h3`
  font-size: ${rem(28)};
  margin-bottom: ${rem(16)};

  @media (min-width: ${rem(1023)}) {
    font-size: ${rem(32)};
    margin-bottom: ${rem(24)};
  }
`;

// ProjectDesc
export const ProjectDesc = styled.p`
  font-family: var(--copy-font);
  font-size: ${rem(16)};
  margin-bottom: ${rem(20)};

  @media (min-width: ${rem(767)}) {
    margin-bottom: ${rem(16)};
  }
  
  @media (min-width: ${rem(1023)}) {
    font-size: ${rem(18)};
    margin-bottom: ${rem(24)};
  }
`;

// ProjectSkills
export const ProjectSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(14)};
  margin-bottom: ${rem(20)};

  @media (min-width: ${rem(1023)}) {
    margin-bottom: ${rem(40)};
  }
`;

// SkillTag
export const SkillTag = styled.span`
  display: inline-block;
  padding: ${rem(3)} ${rem(12)};
  font-size: ${rem(20)};
  color: var(--purple);
  border: solid 1px var(--pink);
`;

// ProjectLinks
export const ProjectLinks = styled.div``;

// ProjectLink
export const ProjectLink = styled.a`
  padding: ${rem(10)} ${rem(29)};
  margin-right: ${rem(16)};
  color: var(--white);
  background-color: var(--purple);

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: ${rem(1023)}) {
    font-size: ${rem(18)};
    padding: ${rem(14)} ${rem(50)};
  }
`;