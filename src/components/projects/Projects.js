import {
  ProjectsContainer,
  ProjectTitle,
  ProjectDesc,
  ProjectSkills,
  SkillTag,
} from "./styledComponents";
import { SectionTitle } from "../layout";
import ogbbThumb from "../../assets/images/ogbball-thumb.png";
import devtaskThumb from "../../assets/images/devtask-thumb.png";
import sweetThumb from "../../assets/images/sweet-&-cool-thumb.png";
import eshopThumb from "../../assets/images/eshop-thumb.png";
import bugbustersThumb from "../../assets/images/bug-busters-thumb.png";
import CardComponent from "./Card";

function ProjectsComponent() {
  // Bug busters URLs
  const bugbusterDemo = "https://bug-busters.onrender.com/";
  const bugbusterCode = "https://github.com/mondirhallouli/bug-busters";
  // Eshop ecommerce URLs
  const eshopDemo = "https://eshop-ecommerce.pages.dev/";
  const eshopCode = "https://github.com/mondirhallouli/eshop-ecommerce";
  // OG Bball project URLs for code and live version
  const ogbballDemo = "https://ogbball-site.pages.dev/";
  const ogbballCode = "https://github.com/mondirhallouli/ogbball-site";
  // DevTask project URLs
  const devtaskDemo = "https://devtask-manager.pages.dev/";
  const devtaskCode = "https://github.com/mondirhallouli/devtask-manager";
  // Sweet & Cool project URLs
  const sncDemo = "https://ice-cream-website.pages.dev/";
  const sncCode = "https://github.com/mondirhallouli/ice-cream-website";

  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      {/* 1st project */}
      <CardComponent img={bugbustersThumb} demoLink={bugbusterDemo} codeLink={bugbusterCode}>
        <ProjectTitle>Bug busters</ProjectTitle>
        <ProjectDesc>
          Bug busters is small community driven bug sharing platform for developers to help each other.
        </ProjectDesc>
        <ProjectSkills>
          <SkillTag>React JS</SkillTag>
          <SkillTag>React-Router</SkillTag>
          <SkillTag>Tailwind CSS</SkillTag>
          <SkillTag>Express JS</SkillTag>
          <SkillTag>MongoDB</SkillTag>
          <SkillTag>Mongoose</SkillTag>
          <SkillTag>JWT</SkillTag>
        </ProjectSkills>
      </CardComponent>

      {/* 1st project */}
      <CardComponent img={eshopThumb} demoLink={eshopDemo} codeLink={eshopCode}>
        <ProjectTitle>Eshop ecommerce</ProjectTitle>
        <ProjectDesc>
          Eshop is a minimal design of a fictional ecommerce business's
          frontend.
        </ProjectDesc>
        <ProjectSkills>
          <SkillTag>React</SkillTag>
          <SkillTag>Fetch API</SkillTag>
          <SkillTag>CSS</SkillTag>
          <SkillTag>Redux</SkillTag>
        </ProjectSkills>
      </CardComponent>

      {/* 2nd project */}
      <CardComponent
        img={ogbbThumb}
        demoLink={ogbballDemo}
        codeLink={ogbballCode}
      >
        <ProjectTitle>Original Basketball</ProjectTitle>
        <ProjectDesc>
          Original Basketball is a concept of a fictional basketball coaching
          business with a YT viewer base.
        </ProjectDesc>
        <ProjectSkills>
          <SkillTag>Figma</SkillTag>
          <SkillTag>React</SkillTag>
          <SkillTag>CSS</SkillTag>
          <SkillTag>Styled-Components</SkillTag>
          <SkillTag>Redux</SkillTag>
        </ProjectSkills>
      </CardComponent>

      {/* 3rd project */}
      <CardComponent
        img={devtaskThumb}
        demoLink={devtaskDemo}
        codeLink={devtaskCode}
      >
        <ProjectTitle>Devtask Manager</ProjectTitle>
        <ProjectDesc>
          DEVTASK is a react app that allows the user to manage their workflow
          through a simple task management system.
        </ProjectDesc>
        <ProjectSkills>
          <SkillTag>Figma</SkillTag>
          <SkillTag>Javascript</SkillTag>
          <SkillTag>React</SkillTag>
          <SkillTag>CSS</SkillTag>
          <SkillTag>Redux</SkillTag>
          <SkillTag>Local Storage</SkillTag>
        </ProjectSkills>
      </CardComponent>

      {/* 4th project */}
      <CardComponent img={sweetThumb} demoLink={sncDemo} codeLink={sncCode}>
        <ProjectTitle>Sweet &amp; Cool website</ProjectTitle>
        <ProjectDesc>
          Cool & Sweet is a fictional small business, designed and coded with
          both business and clients in mind.
        </ProjectDesc>
        <ProjectSkills>
          <SkillTag>Figma</SkillTag>
          <SkillTag>HTML</SkillTag>
          <SkillTag>Parcel js</SkillTag>
          <SkillTag>SASS/SCSS</SkillTag>
          <SkillTag>Javascript</SkillTag>
        </ProjectSkills>
      </CardComponent>
    </ProjectsContainer>
  );
}

export default ProjectsComponent;
