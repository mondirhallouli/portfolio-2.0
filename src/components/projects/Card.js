import {
  ProjectCard,
  ProjectThumbnail,
  ProjectDetails,
  ProjectLinks,
  ProjectLink
} from './styledComponents'

function CardComponent({ img, demoLink, codeLink, children }) {
  return (
    // card wrapper
    <ProjectCard>
      {/* project thumbnail */}
      <ProjectThumbnail>
        <img src={img} />
      </ProjectThumbnail>
      {/* project details section */}
      <ProjectDetails>
        {children}
        {/* project links to live version & code */}
        <ProjectLinks>
          <ProjectLink
            href={demoLink}
            target="_blank"
          >
            Demo
          </ProjectLink>
          <ProjectLink
            href={codeLink}
            target="_blank"
          >
            Code
          </ProjectLink>
        </ProjectLinks>
      </ProjectDetails>
    </ProjectCard>
  )
}

export default CardComponent