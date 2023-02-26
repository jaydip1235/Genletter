import { Link } from 'react-router-dom';
import classes from './NavbarItem.module.css';

const NavbarItem = (props) => {
    return <Link className={`${classes.link}`} to={props.link} onClick={props.onLogout}><span>{props.item}</span></Link>
}

export default NavbarItem;