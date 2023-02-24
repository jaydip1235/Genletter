import React from 'react';
import NavbarItem from './NavbarItem';
import classes from './Navbar.module.css';
import logo from '../../../assets/Icon-notepad.png';

const Navbar = () => {
    return (
        <div className={`${classes.list}`}>
            <div className={`${classes.left}`}>
                <img src={logo} alt='logo' className={`${classes.logo}`} />
                <NavbarItem item='Genletter' link='/' />
            </div>
            <div className={`${classes.right}`}>
                <NavbarItem item='Home' link='/' />
                <NavbarItem item='Templates' link='/templates' />
                <NavbarItem item='Blog' link='/blog' />
                <NavbarItem item='FAQ' link='faq' />
                <NavbarItem item='Login' link='/login' />
            </div>
        </div>
    )
}

export default Navbar;