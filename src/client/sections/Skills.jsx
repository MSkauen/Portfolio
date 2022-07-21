import React from "react";
import FadeInSection from "../lib/FadeInSection";
import Scrumwise_Logo from "../../shared/img/Scrumwise_Logo.png"

export default function Skills () {
    return (
        <div className="skills">
            <div className="section">
                <div className="skills-innerRef"/>
                <h4>Skills</h4>

                <div className="grid">
                    <div className="card">
                        <h5>Front-end Development</h5>
                        <hr/>

                        <div className="skill-details">
                            <FadeInSection className="col" type={"fade-in"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                     alt="The logo icon for react" title="React"/>
                                <span className={"img-label"}>React</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-2"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                     alt="The logo icon for Javascript" title="JavaScript"/>
                                <span className={"img-label"}>JavaScript</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-3"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                     alt="The logo icon for HTML 5" title="HTML 5"/>
                                <span className={"img-label"}>HTML</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                     alt="The logo icon for CSS3" title="CSS 3"/>
                                <span className={"img-label"}>CSS</span>
                            </FadeInSection>
                        </div>
                    </div>
                    <div className="card">
                            <h5>Back-end Development</h5>
                            <hr/>

                        <div className="skill-details">
                            <FadeInSection className="col" type={"fade-in"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                     alt="The logo icon for Express" title="Express"/>
                                <span className={"img-label"}>Express</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-2"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg"
                                     alt="The logo icon for jQuery" title="jQuery"/>
                                <span className={"img-label"}>jQuery</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-3"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                     alt="The logo icon for MongoDB" title="Mongo DB"/>
                                <span className={"img-label"}>Mongo DB</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                     alt="The logo icon for PostgreSQL" title="PostgreSQL"/>
                                <span className={"img-label"}>PostgreSQL</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-3"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                     alt="The logo icon for NodeJS" title="Node JS"/>
                                <span className={"img-label"}>Node JS</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-2"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                     alt="The logo icon for Java" title="Java"/>
                                <span className={"img-label"}>Java</span>
                            </FadeInSection>
                        </div>
                    </div>
                    <div className="card">
                        <h5>Project management</h5>
                        <hr/>

                        <div className="skill-details">
                            <FadeInSection className="col" type={"fade-in"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                     alt="The logo icon for GitHub" title="GitHub"/>
                                <span className={"img-label"}>Github</span>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-3"}>
                                <img src={Scrumwise_Logo}
                                     alt="The logo icon for Scrumwise" title="Scrumwise"/>
                                <span className={"img-label"}>Scrumwise</span>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}