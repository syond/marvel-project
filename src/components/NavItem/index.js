import React from 'react';
import { NavItemLink } from './styles';


const NavItem = ({ label }) => {
    return(
        <NavItemLink>{label}</NavItemLink>
    );
}


export default NavItem;
