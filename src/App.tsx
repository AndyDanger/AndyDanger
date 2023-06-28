import './styles/global.css'
import 'react-toastify/dist/ReactToastify.min.css';

import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import {Footer} from "./components/Footer/Footer";
import {Wrapper} from "./components/Pages/Wrapper";

import {Navbar} from "./components/Navbar/Navbar";
import { useTheme } from './theme/ThemeContext'
import React from "react";

function App() {
    const { theme } = useTheme();

    return (
        <HashRouter basename="/">
            <div className="theme-container" style={{...theme as React.CSSProperties}}>
                <Navbar/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Wrapper />}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
