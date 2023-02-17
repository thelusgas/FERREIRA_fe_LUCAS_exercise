import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.color.secondaryContainer};
  color: ${({ theme }) => theme.color.onSecondaryContainer};

  padding: 2rem;
  border-radius: 1rem;
`;
export const List = styled.dl`
  display: grid;
  grid-template-columns: 1fr auto;

  row-gap: 0.5rem;
  column-gap: 1rem;

  font-size: var(--font-base);
`;

export const ItemTitle = styled.dt`
  justify-self: end;
  display: flex;
  text-align: right;
  font-weight: 700;
`;

export const ItemValue = styled.dd`
  display: flex;
  font-weight: 500;
`;

export const Image = styled.img`
  display: flex;
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  border-radius: 50%;
`;

export const TeamLead = styled.span`
  font-weight: 500;
  font-size: var(--font-base);
  font-family: var(--font-family-secondary);
  align-self: end;
`;
