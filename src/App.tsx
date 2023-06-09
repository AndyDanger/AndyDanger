import './styles/global.css'
import 'react-toastify/dist/ReactToastify.min.css';

import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import {Footer} from "./components/Footer/Footer";
import {Homepage} from "./components/Pages/Homepage";
import {About} from "./components/Pages/About";
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
                        <Route path="/" element={<Homepage />}/>
                        <Route path="/about" element={<About />}/>
                        {/* <Navigate to="/"/> */}
                    </Routes>
                </div>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
