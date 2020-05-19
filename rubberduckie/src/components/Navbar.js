import "./Navbar.scss";

import React, { useState } from "react";
import { Link } from "gatsby"
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' 

const Navbar = () => { 
    const [menuOpen, setMenuOpen] = useState(false);

    const onClick = () => {
        setMenuOpen(!menuOpen);
    }

    const hamburgerClass = classNames("navbar__menu-icon", {
        "navbar__menu-icon--hide": menuOpen,
    });

    const iconClass = classNames("navbar__close-icon", {
        "navbar__close-icon--show": menuOpen,
    });

    const HamburgerIcon = <FontAwesomeIcon icon={faBars} size="2x" className={hamburgerClass}/>
    const ExitIcon = <FontAwesomeIcon icon={faTimes} size="2x" className={iconClass}/>

    const mobileClass = classNames("navbar__mobile", {
        "navbar__mobile--show animated fadeIn": menuOpen
    });

    return (
        <>
            <nav className="navbar">
                <div className="navbar__home">
                    <Link to="/">RubberDuckie.io</Link>
                </div>
                <div className="navbar__other-links">
                    <Link to="/how-does-it-work" activeClassName="active">How does it work?</Link>
                    <Link to="/faq" activeClassName="active">FAQ</Link>
                </div>
            </nav>
            <span className="navbar__hamburger" onClick={onClick}>
                {HamburgerIcon}
                {ExitIcon}
            </span>
            <nav className={mobileClass}>
                <div className="navbar__mobile-links">
                    <Link to="/">RubberDuckie.io</Link>
                    <Link to="/how-does-it-work" activeClassName="active">How does it work?</Link>
                    <Link to="/faq" activeClassName="active">FAQ</Link>
                </div>
            </nav>
        </>
        
    )
}

export default Navbar;