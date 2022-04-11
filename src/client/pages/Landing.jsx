import React from "react";
import NavBar from "../components/NavBar";
import Links from "../components/Links";
import "../../shared/css/App.css";
import "../../shared/css/FadeInSection.css";

import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Space from "../sections/Space";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import Footer from "../sections/Footer";

export default function Landing () {

    return (
        <div className="App">
            <Links/>
            <NavBar/>

                <Hero/>
                <Projects/>
                <Skills/>
                <Contact/>
                <Footer/>
        </div>
)}