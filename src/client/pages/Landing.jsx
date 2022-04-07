import React from "react";
import NavBar from "../components/NavBar";
import Links from "../components/Links";
import "../../shared/css/App.css";


export default function Landing () {
    return <div className="App">
        <Links/>
        <NavBar/>
        <div className="hero">
            <div className="hero-card">

            </div>
        </div>
    </div>
}