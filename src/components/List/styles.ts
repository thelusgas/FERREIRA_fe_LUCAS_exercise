import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
`;
