import React from "react";
import { Link } from "react-scroll";
import FadeInSection from "../lib/FadeInSection";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import githubLogo from "../../shared/img/GitHub_Logo_White.png";
import githubMark from "../../shared/img/GitHub-Mark-Light-64px.png";

export default function Hero () {
    return (
        <div className="hero">
            <div className="text-zone">
                <div>
                    <FadeInSection className="text" type={"fade-in-3"} >
                        <h3 className="">Hi, my name is</h3>
                    </FadeInSection>

                    <FadeInSection className="text" type={"fade-in-2"}>
                        <h1 className="name">Mathias</h1>
                    </FadeInSection>

                    <FadeInSection className="text" type={"fade-in"}>
                        <h1>I create web solutions</h1>
                    </FadeInSection>
                </div>
                <div>
                    <h2>Frontend / Backend Developer</h2>
                    <div className="row call-to-action">

                        <a href="https://github.com/MSkauen">
                            <button className="btn">
                                <img className="logo" src={githubLogo} alt="Github"/>
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
                                <SendRoundedIcon height="50%"/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}