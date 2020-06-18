import React from 'react';
import { Link } from 'react-router-dom';


const NavMenu = () => {
    return (
        <nav>
            <ul>
                <Link to="/characters">
                    <li>
                        Characters
                    </li>
                </Link>
                <Link to="/comics">
                    <li>
                        Comics
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        About
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavMenu;
