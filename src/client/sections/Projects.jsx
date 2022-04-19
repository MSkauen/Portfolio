import React from "react";
import PokemonYellow from "url:../../shared/img/pokemon-yellow.gif";
import Placeholder from "../../shared/img/placeholder.jpg";

import OpenNewTab from "../../shared/img/open_new_tab.svg";
import githubMark from "../../shared/img/GitHub-Mark-Light-64px.png";
import { Link } from "react-scroll";

export default function Projects () {
    return (
        <div className="projects">
            <div className="section">
                <div className="project-innerRef"/>
                <h1>Projects</h1>

                <div className="grid">
                    <div className="project-card">
                        <div className="card">
                            <h3>Pokemon Game</h3>
                            <hr/>
                            <div className="project-details">
                                <img src={PokemonYellow} alt="pokemon"/>
                            </div>
                            <div className="row call-to-action">

                                <a href="https://github.com/MSkauen">
                                    <button className="btn">
                                        <img className="mark" src={githubMark} alt="GitHub Logo"/>
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
                                    <button className="btn">
                                        <img className="mark" src={OpenNewTab} alt="Open live website"/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="card">
                            <h3>Placeholder v1</h3>
                            <hr/>
                            <div className="project-details">
                                <img src={Placeholder} alt="Placeholder"/>
                            </div>
                            <div className="row call-to-action">

                                <a href="https://github.com/MSkauen">
                                    <button className="btn">
                                        <img className="mark" src={githubMark} alt="GitHub Logo"/>
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
                                    <button className="btn">
                                        <img className="mark" src={OpenNewTab} alt="Open live website"/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}