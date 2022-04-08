import React from "react";
import NavBar from "../components/NavBar";
import Links from "../components/Links";
import "../../shared/css/App.css";
import "../../shared/css/FadeInSection.css";
import githubMark from '../../shared/img/GitHub-Mark-Light-64px.png';
import githubLogo from '../../shared/img/GitHub_Logo_White.png';

import FadeInSection from "../lib/FadeInSection";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function Landing () {

    return <div className="App">
        <Links/>
        <NavBar/>
        <div className="hero">
            <div className="text-zone">
                <h1>
                <FadeInSection type={"fade-in-3"}>
                    Hello,
                </FadeInSection>
                <FadeInSection type={"fade-in-2"}>
                    I'm <span className="name">Mathias</span>
                </FadeInSection>
                <FadeInSection type={"fade-in"}>
                    I create web solutions
                </FadeInSection>
                </h1>
                <div>
                    <h2>Frontend / Backend Developer</h2>
                    <div className="row call-to-action">

                        <a href="https://github.com/MSkauen">
                            <button className="btn">
                                <img className="logo" src={githubLogo}/>
                                <img className="mark" src={githubMark}/>
                            </button>
                        </a>

                        <button className="btn">
                            <SendRoundedIcon height="50%"/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <div className="hero">
            <div className="hero-card">
                <div className="project-innerRef"></div>
                <h1>PROJECTS</h1>
                <div className="projects">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
        </div>
        <div className="hero">

        </div>
        <div className="hero">
            <div className="hero-card">
                <div className="project-innerRef"></div>
                <h1>Contact Me</h1>
                    <form action="mailto:info@w3docs.com" method="get" encType="text/plain">
                        <div>
                                <input type="text" name="name" id="name" placeholder="Name"/>
                        </div>
                        <div>
                                <input type="text" name="email" id="email" placeholder="Enter email"/>
                        </div>
                        <div>
                            <textarea name="comments" rows="12" cols="35">Your message.</textarea>
                        </div>
                        <div>
                            <input type="submit" name="submit" value="Get In Touch"/>
                        </div>
                    </form>
            </div>
        </div>

    </div>
}