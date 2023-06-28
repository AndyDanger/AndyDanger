import './styles/wrapperStyle.css'

import { Home } from './Home'
import { Work } from './Work'
import { About } from './About'



import { useEffect, useState } from "react";


export function Wrapper() {

    useEffect(() => {

    }, [])

    document.title = "Andy Danger Portfolio";

    return (
        <div>
            <div className="skyWrapper">
            </div>
            <div className="sunWrapper">
                <div className="sun" />
            </div>
            <div className="homepageWrapper">
                <Home />
                <Work />
                <About />
            </div>
        </div>
    );
}