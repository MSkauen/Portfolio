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
                <h1>Projects</h1>
                <div className="projects">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
        </div>
    </div>
}