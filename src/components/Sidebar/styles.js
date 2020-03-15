import styled from 'styled-components';

export const Container = styled.div`
  grid-area: sidenav;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 22px; 
  padding-top: 30px;

  a {
      color: rgba(255, 255, 255, 0.6);
      padding: 18px 48px;
      transition: all 0.5s ease;
  }

  a:hover{
      color: #fff;
  }

  a.active {
      color: #fff;
  
`;
