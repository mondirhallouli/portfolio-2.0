import styled from 'styled-components'
import { rem } from '../utils'

/*
  == COMOPONENT SUMMARY ==
  --> SectionTitle --> line 10
*/

// SectionTitle
export const SectionTitle = styled.h1`
  font-weight: normal;
  font-size: ${rem(40)};
  text-align: center;
  color: var(--purple);
  margin-bottom: ${rem(50)};

  @media (min-width: ${rem(767)}) {
    font-size: ${rem(50)};
  }
`;