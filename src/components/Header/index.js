import React from 'react';

import { Container, Logo, Menu } from './styles';

import logoImg from '../../assets/MarvelLogo.svg';

const Header = () => {
    return(
        <Container>
            <Logo src={logoImg} />
            <Menu />
        </Container>
    );
}


export default Header;
