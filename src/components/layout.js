import styled from 'styled-components'
import { rem } from '../utils'

/*
  == COMOPONENT SUMMARY ==
  --> Title --> line 10
*/

// Title
export const SectionTitle = styled.h1`
  font-weight: normal;
  font-size: ${rem(40)};
  color: var(--purple);
  margin-bottom: ${rem(16)};

  @media (min-width: ${rem(767)}) {
    font-size: ${rem(50)};
    text-align: left;
    margin-bottom: ${rem(20)};
  }
`;