import React from 'react';
import NavbarItem from './NavbarItem';
import classes from './Navbar.module.css';
import logo from '../../../assets/Icon-notepad.png';

const Navbar = (props) => {

    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    }

    return (
        <div className={`${classes.list}`}>
            <div className={`${classes.left}`}>
                <img src={logo} alt='logo' className={`${classes.logo}`} />
                <NavbarItem item='Genletter' link='/' />
            </div>
            <div className={`${classes.right}`}>
                <NavbarItem item='Home' link='/' />
                <NavbarItem item='Profile' link='/profile' />
                <NavbarItem item='Blog' link='/blog' />
                <NavbarItem item='FAQ' link='faq' />
                {props.user ? <NavbarItem item='Logout' onLogout={logout} /> : <NavbarItem item='Login' link='/login' />}
            </div>
        </div>
    )
}

export default Navbar;