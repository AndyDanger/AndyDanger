import './styles/homepageStyle.css'

import { ReactComponent as WaveSVG } from '../Pages/assets/wave-haikei-trans.svg';


import { useEffect, useState } from "react";


export function Home() {

    useEffect(() => {

    }, [])

    return (
            <div className="container waves">
                    <section className="background">
                        <div className="content-wrapper">
                            <p className="content-title">Hello!</p>
                            <p className="content-subtitle">I'm Andrew "Andy Danger" Marshall, a UX designer, analytics specialist, and web developer based in St. Louis</p>
                        </div>
                    </section>
                    <section className="background">
                        <div className='wrapper'>
                            <WaveSVG />
                            <div></div>
                        </div>
                        <div className="content-wrapper">
                            <p className="content-title">UX</p>
                            <p className="content-subtitle">I've designed, developed and designed hundreds of A/B test for a whole slew of clients and industries.</p>
                            <div>
                                <div className="abTests">
                                    <div>
                                        <img src={require('../Pages/assets/alphapaw_slide.jpg')} />
                                    </div>
                                    <div>
                                        <img src={require('../Pages/assets/bartesian_slide.jpg')} />
                                    </div>
                                    <div>
                                        <img src={require('../Pages/assets/mtnops_slide.jpg')} />
                                    </div>
                                    <div>
                                        <img src={require('../Pages/assets/sandcloud_slide.jpg')} />
                                    </div>
                                    <div>
                                        <img src={require('../Pages/assets/slumberkins_slide.jpg')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="background">
                        <div className='wrapper'>
                            <WaveSVG />
                            <div></div>
                        </div>
                        <div className="content-wrapper">
                            <p className="content-title">Analytics</p>
                            <p className="content-subtitle">My insights are catered to fit your needs and based on real-market data.</p>
                            <iframe className="guessTheTestVideo" src="https://www.youtube.com/embed/uOoyhCdPSwM" title="Guess The Test: Including Savings Callout in Mini-Cart" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </section>
                    <section className="background">
                        <div className='wrapper'>
                            <WaveSVG />
                            <div></div>
                        </div>
                        <div className="content-wrapper">
                            <p className="content-title">Web Development</p>
                            <p className="content-subtitle">Everything you see here I coded myself using TypeScript/React. Swipe left to learn more</p>
                            <div className="swipe">
                                <div className="path"></div>
                                <div className="hand-icon"></div>
                            </div>
                        </div>
                    </section>
            </div>
    );
}