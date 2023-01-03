import react from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import "../assets/css/Header.css";

const Header = () => {

    return (
        <div className='container-header'>
            <ul className='header'>
                <li>
                    <img className='header-logo' src={logo}></img>
                </li>
                <li>
                    <NavLink  className='link'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink className='link'>Profil</NavLink>
                </li>
                <li>
                    <NavLink className='link'>Réglage</NavLink>
                </li>
                <li>
                    <NavLink className='link'>Communauté</NavLink>
                </li>
            </ul>
        </div>
    )

}

export default Header;