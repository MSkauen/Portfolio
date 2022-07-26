import React from "react";
import "../../shared/css/App.css";
import "../../shared/css/ScrollDown.css";
import "../../shared/css/FadeInSection.css";
import cloud_1 from "url:../../shared/img/background/cloud_1.webp";
import cloud_2 from "url:../../shared/img/background/cloud_2.webp";
import cloud_3 from "url:../../shared/img/background/cloud_3.webp";
import Background from "../lib/Background.jsx";
import NavBar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import {useMediaQuery} from "@mui/material";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

export default function Landing () {
    const isMobile = useMediaQuery('(max-width:960px)');

    return (
        <div className="App">
            <ParallaxProvider>
                <NavBar/>
                {/*
                Use this already made parallax effect instead of my custom Background.jsx parallax component

                <Parallax speed={-50} className="parallax-element">
                    <img src={cloud_1} alt=""/>
                </Parallax>*/}
                    <Hero/>
                    <Skills/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
            </ParallaxProvider>
        </div>
    );
}