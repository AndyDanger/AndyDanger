import './styles/homeStyle.css'

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
                            <p className="content-subtitle">I'm Andrew Marshall, and I'm an expert in:</p>
                            <ul>
                                <li className="content-subtitle">Web Development</li>
                                <li className="content-subtitle">UX Design</li>
                                <li className="content-subtitle">Digital Analytics</li>
                            </ul>
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
                                        <img src={require('../Pages/assets/bartesian_ab.png')} />
                                        <p>Inserting a GIF on the Homepage increased CVR by 42%</p>
                                        <a href="https://docs.google.com/presentation/d/1fNIP5s5yuyrmtw88uL7DVYgjWjF8ELvDAngt9WIaSEQ/edit#slide=id.g2141c11aea4_0_132">View Case Study</a>
                                    </div>
                                    <div>
                                        <img src={require('../Pages/assets/super_coffee_ab.png')} />
                                        <p>Making the product cards shorter and reducing the padding around them increased CVR by 49%</p>
                                        <a href="https://docs.google.com/presentation/d/1fNIP5s5yuyrmtw88uL7DVYgjWjF8ELvDAngt9WIaSEQ/edit#slide=id.g11a9287d2c2_0_0">View Case Study</a>
                                    </div>
                                    <div>
                                        <img src={require('../Pages/assets/alphapaw_ab.png')} />
                                        <p>Inserting the price before savings in the mini-cart increased CVR by 9.8%</p>
                                        <a href="https://docs.google.com/presentation/d/1fNIP5s5yuyrmtw88uL7DVYgjWjF8ELvDAngt9WIaSEQ/edit#slide=id.g127d68e279e_0_0">View Case Study</a>
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