import {
    FooterContainer,
    FooterWrapper,
    FooterLogo,
    FooterYear,
    BackToTop
} from './styledComponents'
import btt from '../../assets/images/btt.svg'
import logo from '../../assets/images/logo.svg'

function FooterComponent() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogo href="/">
                    <img src={logo} alt="mondir hallouli's logo" />
                </FooterLogo>
                <FooterYear>&copy; 2023</FooterYear>
                <BackToTop onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                    <img src={btt} alt="back to top icon" />
                </BackToTop>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default FooterComponent