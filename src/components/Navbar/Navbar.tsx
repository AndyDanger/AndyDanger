import React from "react";
import './styles/navbarStyle.css'
import { ReactComponent as LoLLogoSVG } from '../../assets/images/league-of-legends.svg';
import { ReactComponent as LogoSVG } from '../../assets/images/logo.svg';

import { Link } from "react-router-dom";
import { ThemeToggler } from "./ThemeToggler";

export function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-logo-container">
                <Link className="navbar-logo" to="/">
                    <LogoSVG />
                </Link>
                <div className="slider-nav">
                    <h2 className="navbar-icon">Home</h2>
                    <h2 className="navbar-icon">Work</h2>
                    <h2 className="navbar-icon">About</h2>
                </div>
            </div>
            <div className="settings-container">
                <ThemeToggler/>
            </div>
        </nav>
    );
}