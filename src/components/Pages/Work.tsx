import './styles/workStyle.css'
import { ReactComponent as PeaksSVG } from '../Pages/assets/layered-peaks-haikei-trans.svg';

import { useEffect, useState } from "react";


export function Work() {

    useEffect(() => {

    }, [])

    document.title = "Andy Danger Portfolio";

    return (
        <div>
            <div className="container peaks">
                <section className="background">
                    <div className="content-wrapper">
                        <p className="content-title">Work Page</p>
                        <p className="content-subtitle">Scroll down!</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <PeaksSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Amazon forest</p>
                        <p className="content-subtitle">All the rendered pixels are super reall</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <PeaksSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Fireflies.</p>
                        <p className="content-subtitle">Long-exposure photo of fireflies in a darkened Japanese forest</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <PeaksSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">LAST SLIDE</p>
                        <p className="content-subtitle">Long-exposure photo of fireflies in a darkened Japanese forest</p>
                    </div>
                </section>
            </div>
        </div>
    );
}