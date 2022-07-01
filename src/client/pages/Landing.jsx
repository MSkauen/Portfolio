import React from "react";
import "../../shared/css/App.css";
import "../../shared/css/FadeInSection.css";
import background from "url:../../shared/img/background.png";
import {ParticlesContainer as Links} from "../components/Links";
import Background from "../lib/background.jsx";
import NavBar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Space from "../sections/Space";

export default function Landing () {
    return (
        <div className="App">
            <Links/>
            <Background extraOffsetY={-100} src={background} scale={1}/>
            <NavBar/>
                <Hero/>
                <Projects/>
                <Skills/>
                <Space/>
                <Contact/>
            <Footer/>
        </div>
    );
}