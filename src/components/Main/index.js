import React from 'react';

import { Container } from './styles';


const Main = (props) => {
    return(
        <Container>{props.children}</Container>
    );
}


export default Main;
