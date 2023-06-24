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
            <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1vKXa3dDupYkscty7CXLVYtMvkZB-ljXH/edit?usp=sharing&ouid=112510460207694246278&rtpof=true&sd=true">
                Resume
            </a>
        </nav>
    );
}