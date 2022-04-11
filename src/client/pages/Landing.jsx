import React from "react";
import "../../shared/css/App.css";
import "../../shared/css/FadeInSection.css";
import Background from "../components/Links";
import NavBar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Landing () {
    return (
        <div className="App">
            <Background/>
            <NavBar/>
                <Hero/>
                <Projects/>
                <Skills/>
                <Contact/>
            <Footer/>
        </div>
    );
}