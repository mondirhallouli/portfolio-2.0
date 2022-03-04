import styled from 'styled-components'
import { rem } from '../../utils'

/*
  == COMOPONENT SUMMARY ==
  --> ContactContainer --> line 10
  --> InfoWrapper --> line 21
  --> InfoLink --> line 36
*/

// ContactContainer 
export const ContactContainer = styled.section`
  width: calc(100% - ${rem(72)});
  margin: 0 auto ${rem(60)};

  @media (min-width: ${rem(767)}) {
    width: ${rem(694)};
  }
`;

// InfoWrapper
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${rem(16)};
  flex-wrap: wrap;

  @media (min-width: ${rem(767)}) {
    flex-direction: row;
  }
`;

// InfoLink
export const InfoLink = styled.a`
  font-size: ${rem(22)};

  &:hover {
    color: var(--half-purple);
  }
`;