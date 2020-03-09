import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html,body,#root{
    height: 100%;
  }

  body{
    background: linear-gradient(125.47deg, #360033 0%, rgba(11, 135, 147, 0) 137.21%), #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

`;
