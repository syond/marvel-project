import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/MarvelLogo.svg';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Marvel" />
            </Link>
        </header>
    );
}

export default Header;
