import './styles/workStyle.css'

import { ReactComponent as PeaksSVG } from '../Pages/assets/layered-peaks-haikei-trans.svg';


import { useEffect, useState } from "react";


export function Work() {

    useEffect(() => {

    }, [])


    return (

        <div className="container peaks">
            <section className="background">
                <div className="content-wrapper">
                    <p className="content-title">Work</p>
                    <p className="content-subtitle">I've had the pleasure of working for the following companies:</p>
                    <p className="company-logos">
                        <img src={require('../Pages/assets/roi_revolution.png')} />
                        <img src={require('../Pages/assets/relias.png')} />
                        <img src={require('../Pages/assets/elevar.png')} />
                    </p>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <PeaksSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <p className="content-title">Clients</p>
                    <p className="content-subtitle">These are a handful of the websites I've provided insights and A/B testing for:</p>
                    <p className="company-logos">
                        <img src={require('../Pages/assets/puma.png')} />
                        <img src={require('../Pages/assets/netflix.png')} />
                        <img src={require('../Pages/assets/raycon.png')} />
                        <img src={require('../Pages/assets/sand_cloud.png')} />
                        <img src={require('../Pages/assets/hunter_fan.png')} />
                        <img src={require('../Pages/assets/super_coffee.png')} />
                        <img src={require('../Pages/assets/casetify.png')} />
                        <img src={require('../Pages/assets/bartesian.png')} />
                    </p>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <PeaksSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <p className="content-title">Skills</p>
                    <ul>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            node.js
                        </li>
                        <li>
                            jQuery
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Git
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            Google Analytics
                        </li>
                        <li>
                            Google Tag Manager
                        </li>
                        <li>
                            Photoshop
                        </li>
                    </ul>
                    <p className="content-subtitle">For a full list of my skills and work experience, you can view my resume here:</p>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1vKXa3dDupYkscty7CXLVYtMvkZB-ljXH/edit?usp=sharing&ouid=112510460207694246278&rtpof=true&sd=true">
                        View Resume
                    </a>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <PeaksSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <p className="content-title">Personal</p>
                    <p className="content-subtitle">Real-time stats for live, professional League of Legends games</p>
                    <img src={require('../Pages/assets/esports.png')} />
                    <a target="_blank" rel="noreferrer" href="https://andydanger.github.io/live-lol-esports/#/">View Website</a>
                </div>
            </section>
        </div>
    );
}