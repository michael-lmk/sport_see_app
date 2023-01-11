import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import "../assets/css/Header.css";

/**
 * Navigation on top 
 */
const Header = () => {

    return (
        <div className='container-header'>
            <div className='header'>
                <div>
                    <img className='header-logo' alt='' src={logo}></img>
                </div>
                <div>
                    <NavLink  className='link'>Accueil</NavLink>
                </div>
                <div>
                    <NavLink className='link'>Profil</NavLink>
                </div>
                <div>
                    <NavLink className='link'>Réglage</NavLink>
                </div>
                <div>
                    <NavLink className='link'>Communauté</NavLink>
                </div>
            </div>
        </div>
    )

}

export default Header;