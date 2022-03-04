import { SectionTitle } from '../layout'
import {
  ContactContainer,
  InfoWrapper,
  InfoLink
} from './styledComponents'

function ContactComponent() {
  const linkedinLink = '';
  const githubLink = '';
  return (
    <ContactContainer>
      <SectionTitle>Contact</SectionTitle>
      {/* contact information */}
      <InfoWrapper>
        {/* Linkedin link */}
        <InfoLink
          href={linkedinLink}
          target="_blank"
        >
          LinkedIn
        </InfoLink>
        {/* Github link */}
        <InfoLink
          href={githubLink}
          target="_blank"
        >
          Github
        </InfoLink>
        {/* Email link */}
        <InfoLink
          href="mailto:mondir.business@gmail.com"
          target="_blank"
        >
          mondir.business@gmail.com
        </InfoLink>
      </InfoWrapper>
    </ContactContainer>
  )
}

export default ContactComponent