import React from "react";
import { Link } from "react-scroll";
import FadeInSection from "../lib/FadeInSection";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import githubLogo from "../../shared/img/GitHub_Logo_White.png";
import githubMark from "../../shared/img/GitHub-Mark-Light-64px.png";
import leftArrow from "../../shared/img/down_arrow.webp";

export default function Hero () {
    return (
        <div className="hero">
            <div className="text-zone">
                <div>
                        <h1 className="name">Mathias Skauen Harestad</h1>

                        <h2>I create web solutions</h2>
                </div>
                <div>
                    <h3>Frontend / Backend Developer</h3>
                    <div className="row call-to-action">

                        <a href="https://github.com/MSkauen" title="Github" target="_blank" rel="noopener noreferrer">
                            <button className="btn">
                                <img className="logo" src={githubLogo} alt="Github"/>
                                <img className="mark" src={githubMark} alt="GitHub Logo"/>
                            </button>
                        </a>

                        <Link
                            title="Send email"
                            activeClass=""
                            to="contact-innerRef"
                            spy={true}
                            smooth={true}
                            offset={-0}
                            duration={700}
                        >
                            <button className="btn">
                                <SendRoundedIcon height="50%"/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero-footer">
                <Link
                    activeClass=""
                    to="skills-innerRef"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                >
                    <img className="down-arrow" src={leftArrow}/>
                </Link>
            </div>
        </div>
    );
}