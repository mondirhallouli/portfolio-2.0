import {
  Skills,
  TitleWrapper,
  SkillSectionTitle,
  Subtitle,
  SkillsContainer,
  SkillCategory,
  CategoryName,
  SkillsWrapper,
  SkillName
} from './styledComponents'

function SkillsComponent() {
  return (
    <Skills>
      {/* Section Title & Subtitle */}
      <TitleWrapper>
        <SkillSectionTitle>Skills</SkillSectionTitle>
        <Subtitle>These are the skills and technologies I work with</Subtitle>
      </TitleWrapper>
      <SkillsContainer>
        {/* Languages category */}
        <SkillCategory>
          <CategoryName>Languages</CategoryName>
          <SkillsWrapper>
            <SkillName>HTML</SkillName>
            <SkillName>CSS</SkillName>
            <SkillName>JavaScript</SkillName>
          </SkillsWrapper>
        </SkillCategory>
        {/* Frameworks & libraries category */}
        <SkillCategory>
          <CategoryName>Frameworks & Libraries</CategoryName>
          <SkillsWrapper>
            <SkillName>React</SkillName>
            <SkillName>Redux</SkillName>
            <SkillName>Styled-Components</SkillName>
            <SkillName>SASS/SCSS</SkillName>
          </SkillsWrapper>
        </SkillCategory>
        {/* Version Control category */}
        <SkillCategory>
          <CategoryName>Version Control</CategoryName>
          <SkillsWrapper>
            <SkillName>GIT</SkillName>
            <SkillName>Github</SkillName>
          </SkillsWrapper>
        </SkillCategory>
        {/* Design category */}
        <SkillCategory>
          <CategoryName>Design</CategoryName>
          <SkillsWrapper>
            <SkillName>Figma</SkillName>
            <SkillName>Adobe Xd</SkillName>
          </SkillsWrapper>
        </SkillCategory>
      </SkillsContainer>
    </Skills>
  )
}

export default SkillsComponent