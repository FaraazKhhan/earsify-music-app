import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faInstagram,
    faDribbble,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return ( 
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <p className="font-size-lg font-weight-bold">
                        <Link to="/">
                            Earsify
                        </Link>
                    </p>
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

                <div className="navbar-menu">
                    <input type="checkbox" name="" id="navbar-menu" />
                    <label htmlFor="navbar-menu" className="navbar-menu-label"></label>

                    <ul className="navbar-link-list">
                    <li className="navbar-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-link">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                </div>

            </div>
        </header>
     );
}
 
export default Navbar;
