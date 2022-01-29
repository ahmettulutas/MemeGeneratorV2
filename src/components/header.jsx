import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="header-main">
            <p>MemeGeneratorV2</p>
            <Link className="link" to="/">ALL MEMES</Link>
            
        </header>
    );
}

export default Header;
