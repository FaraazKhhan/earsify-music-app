import React from 'react'

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
                    <h3 className="logo">Earsify</h3>
                    <p>By: <span>FaraazKhhan</span></p>
                </div>

                <div className="social-icon__wrapper">
                    <a href="http://www.instagram.com/faraazed" target="_blank" rel="noopener noreferrer">
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
