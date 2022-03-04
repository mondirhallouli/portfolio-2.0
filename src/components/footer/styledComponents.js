import styled from 'styled-components'
import { rem } from '../../utils'

/*
  == COMOPONENT SUMMARY ==
  --> SectionTitle --> line 10
*/

// FooterContainer
export const FooterContainer = styled.footer`
  padding: ${rem(24)} 0;
  background-image: 
    linear-gradient(to bottom, var(--purple), var(--pink));
`;

// FooterWrapper
export const FooterWrapper = styled.div`
  width: calc(100% - ${rem(72)});
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${rem(24)};

  @media (min-width: ${rem(1279)}) {
    width: ${rem(964)};
  }
`;

// FooterLogo
export const FooterLogo = styled.a`
  width: ${rem(42)};
  height: ${rem(42)};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`;

// FooterYear
export const FooterYear = styled.span`
  font-size: ${rem(20)};
  color: var(--white);
`;

// BackToTop
export const BackToTop = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;