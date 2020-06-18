import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  :root {
      --primary-color: #34CB79;
      --title-color: #322153;
      --text-color: #6C6C80;

      --white: #fff;
      --gray: #8a8c90;

      --link: #5d80d6;

      --rocketseat: #6633cc;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background: #F0F0F5;
      -webkit-font-smoothing: antialiased;
      color: var(--text-color);
    }
    
    body, input, button {
      font-family: Roboto, Arial, Helvetica, sans-serif;
    }
    
    h1, h2, h3, h4, h5, h6 {
      color: var(--title-color);
      font-family: Roboto;
    }
`


