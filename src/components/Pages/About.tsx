import './styles/aboutStyle.css'

import { ReactComponent as StepsSVG } from '../Pages/assets/layered-steps-haikei-trans.svg';


import { useEffect, useState } from "react";


export function About() {

    useEffect(() => {

    }, [])

    return (
        <div className="container steps">
            <section className="background">
                <div className="content-wrapper">
                    <div className='content-column'>
                        <p className="content-title">About</p>
                        <p className="content-subtitle">My wife and I live in St. Louis with our two cats</p>
                    </div>
                    <div className='content-column'>
                        <p className="about-photos">
                            <img src={require('../Pages/assets/wedding.jpg')} />
                            <img src={require('../Pages/assets/engagement.jpg')} />
                        </p>
                    </div>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <StepsSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <div className='content-column'>
                        <p className="content-title">Education</p>
                        <p className="content-subtitle">I graduated from Iowa State University with a Bachelors degree in Computer Engineering in 2017.</p>
                    </div>
                    <div className='content-column'>
                        <img className="singleImage" src={require('../Pages/assets/graduation.jpg')} />
                    </div>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <StepsSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <div className='content-column'>
                        <p className="content-title">Hobbies</p>
                        <p className="content-subtitle">Cats. Rock climbing. Collecting vinyl records.</p>
                    </div>
                    <div className='content-column'>
                        <img className='singleImage' src={require('../Pages/assets/adele.jpg')} />
                    </div>
                </div>
            </section>
            <section className="background">
                <div className='wrapper'>
                    <StepsSVG />
                    <div></div>
                </div>
                <div className="content-wrapper">
                    <div className='content-column'>
                        <p className="content-title">Inspiration</p>
                        <p className="content-subtitle">Logo inspired by End of Evangelion. Layers created using <a href="https://app.haikei.app/">Haikei.app</a></p>
                    </div>
                    <div className='content-column'>
                        <img className="singleImage" src={require('../Pages/assets/evangelion.jpg')} />
                    </div>
                </div>
            </section>
        </div>
    );
}