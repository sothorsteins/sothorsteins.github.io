import React from "react";
import { Link } from 'react-router-dom';

const NavBar = props => {

    return (
        <div className="nav-bar">
            <Link to="/" className="title">Sara {'\u00D3'}sk {'\u00DE'}orsteinsd{'\u00f3'}ttir</Link>
            <div className="nav-links">
                <Link to="/about">About Me</Link>
                <Link to="/portfolio"> Portfolio </Link>
                <Link to="/music"> Music </Link>
            </div>
        </div>

    )

}
export default NavBar;