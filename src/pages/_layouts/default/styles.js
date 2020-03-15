import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 264px 1fr;
  grid-template-rows: 108px 1fr;
  grid-template-areas:
    'header header'
    'sidenav main';
  background: linear-gradient(
      125.21deg,
      #360033 0%,
      rgba(11, 135, 147, 0) 137.21%
    ),
    #ffffff;

  height: 100%;
`;
