import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * { 
        margin: 0;
        padding: 0; 
        outline: 0; 
        box-sizing: border-box; 
    }

    body{
        background-color: #0C121E;
        -webkit-font-smoothing: antialiased;
        font: 400 22px 'Roboto', sans-serif;
    }
`