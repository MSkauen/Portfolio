import SendRoundedIcon from "@mui/icons-material/SendRounded";
import React from "react";
import FadeInSection from "../lib/FadeInSection";
import githubLogo from "../../shared/img/GitHub_Logo_White.png";
import githubMark from "../../shared/img/GitHub-Mark-Light-64px.png";
import {Link} from "react-scroll";


export default function Hero () {
    return (
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

    )
}