import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  place-items: center;
  padding-inline: 2rem;
  padding-block: 1rem 4rem;

  gap: 1rem;

  @media (min-width: 60rem) {
    padding-inline: 4rem;
    padding-block: 1rem 6rem;
  }
`;
