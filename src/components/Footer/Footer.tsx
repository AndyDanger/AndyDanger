import React from "react";
import './styles/footerStyle.css'

import { ReactComponent as GitHubLogoSVG } from '../../assets/images/github.svg';
import { ReactComponent as LinkedInSVG } from '../../assets/images/linkedin.svg';

export function Footer() {

    return (
        <nav className="footer-container">
            <a target="_blank" rel="noreferrer" href="https://github.com/AndyDanger/andydanger.github.io">
                <GitHubLogoSVG className="footer-img" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andrew-marshall-32b404110/">
                <LinkedInSVG className="footer-img" />
            </a>
        </nav>
    );
}