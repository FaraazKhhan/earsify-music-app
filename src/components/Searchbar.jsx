import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {
    return ( 
        <div className="search-bar__container">
            <input type="search" name="search-bar" id="search-bar" placeholder="Song / Artist / Album" />
            <button type="submit">
                <FontAwesomeIcon icon={ faSearch } />
            </button>
        </div>
    );
}
 
export default Searchbar;