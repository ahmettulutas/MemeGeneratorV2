import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="header-main">
            <p>Welcome to MemeGeneratorV2</p>
            <Link to="/">ALL MEMES</Link>
        </header>
    );
}

export default Header;
