import React from "react";
import PokemonYellow from "url:../../shared/img/pokemon-yellow.gif";
import wcts from "../../shared/img/wcts_landing.png";

import OpenNewTab from "../../shared/img/open_new_tab.svg";
import githubMark from "../../shared/img/GitHub-Mark-Light-64px.png";
import { Link } from "react-scroll";
import {useMediaQuery} from "@mui/material";

export default function Projects () {
    const isMobile = useMediaQuery('(max-width:960px)');

    return (
        <div className="projects">
            <div className="section">
                <div className="project-innerRef"/>
                <h1>Projects</h1>

                {isMobile ? (
                    <div className="grid">
                        <div className="project-card">
                            <div className="card">
                                <h3>Pokemon Game</h3>
                                <hr/>
                                <div className="project-details">
                                    <img src={PokemonYellow} alt="pokemon"/>
                                    <span className="project-label ">
                                        React, Node.JS, Express, MongoDB
                                    </span>
                                </div>
                                <div className="row call-to-action">


                                    <a href="https://github.com/MSkauen">
                                        <button className="btn" title="Github Repository">
                                            <img className="small-icon" src={githubMark} alt="GitHub Logo"/>
                                        </button>
                                    </a>

                                    <Link
                                        activeClass=""
                                        to="contact-innerRef"
                                        spy={true}
                                        smooth={true}
                                        offset={-0}
                                        duration={700}
                                    >
                                        <button className="btn" title="Live view">
                                            <img className="small-icon" src={OpenNewTab} alt="Open live website"/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="card">
                                <h3>Working Class Tattoo</h3>
                                <hr/>
                                <div className="project-details">
                                    <img src={wcts} alt="Working Class Tattoo Shop"/>
                                    <span className="project-label ">
                                        React, Node.JS, Express, MongoDB
                                    </span>
                                </div>
                                <div className="row call-to-action">


                                    <a href="https://github.com/MSkauen">
                                        <button className="btn" title="Github Repository">
                                            <img className="small-icon" src={githubMark} alt="GitHub Logo"/>
                                        </button>
                                    </a>

                                    <Link
                                        activeClass=""
                                        to="contact-innerRef"
                                        spy={true}
                                        smooth={true}
                                        offset={-0}
                                        duration={700}
                                    >
                                        <button className="btn" title="Live view">
                                            <img className="small-icon" src={OpenNewTab} alt="Open live website"/>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid">
                        <div className="project-card">
                            <div className="card">
                                <h3>placeholder</h3>
                                <hr/>
                                <div className="project-details">
                                    <img src={PokemonYellow} alt="pokemon"/>
                                    <span className="project-label ">
                                        React, Node.JS, Express, MongoDB
                                    </span>
                                </div>
                            </div>

                            <div className="row call-to-action">

                                <a href="https://github.com/MSkauen">
                                    <button className="btn" title="Github Repository">
                                        <img className="small-icon" src={githubMark} alt="GitHub Logo"/>
                                    </button>
                                </a>

                                <Link
                                    activeClass=""
                                    to="contact-innerRef"
                                    spy={true}
                                    smooth={true}
                                    offset={-0}
                                    duration={700}
                                >
                                    <button className="btn" title="Live view">
                                        <img className="small-icon" src={OpenNewTab} alt="Open live website"/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="card">
                                <h3>Working Class Tattoo</h3>
                                <hr/>
                                <div className="project-details">
                                    <img src={wcts} alt="Working Class Tattoo Shop"/>
                                    <span className="project-label ">
                                        React, Node.JS, Express, MongoDB
                                    </span>
                                </div>
                            </div>

                            <div className="row call-to-action">

                                    <button disabled={true} className="btn" title="Github Repository">
                                        <img className="small-icon" src={githubMark} alt="GitHub Logo"/>
                                    </button>

                                <a href="https://wcts.herokuapp.com/">
                                    <button className="btn" title="Live view">
                                        <img className="small-icon" src={OpenNewTab} alt="Open live website"/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
}