import React from 'react';

import { Container } from './styles';

const Title = (props) => {
    return(
    <Container>{props.children}</Container>
    );
}

export default Title;