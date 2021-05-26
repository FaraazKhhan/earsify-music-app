import React from 'react'
import logo from '../assets/svg-icons/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faInstagram,
    faDribbble,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return ( 
        <nav className="nav-bar">
            <div className="container">
                <div className="logo__wrapper">
                    <img src={ logo } alt="logo" />
                    <p>By: <span>FaraazKhhan</span></p>
                </div>

                <div className="social-icon__wrapper">
                    <a href="http://www.instagram.com/faraazy" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={ faInstagram } />
                    </a>

                    <a href="http://www.dribbble.com/faraazy" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={ faDribbble } />
                    </a>

                    <a href="http://www.twitter.com/FaraazKhhan" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={ faTwitter } />
                    </a>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
