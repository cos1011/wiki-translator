import React from "react";
import { Link } from "react-router-dom";
import { BsWikipedia, BsTranslate, BsPersonAdd } from 'react-icons/bs'
import { PiSignInThin } from 'react-icons/pi'


const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="navigation">
                    <li><BsWikipedia /> <Link to="/wiki">Wikipedia</Link></li>
                    <li><BsTranslate /><Link to="/translator">Translator</Link></li>
                </ul>
                <div className="right-menu">
                    <a className="sign-in-btn" href="#"><PiSignInThin />Sign in</a>
                    <a className="sign-up-btn" href="#"><BsPersonAdd />Sign up</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;