import React from "react";
import FadeInSection from "../lib/FadeInSection";
import Scrumwise_Logo from "../../shared/img/Scrumwise_Logo.png"

export default function Skills () {
    return (
        <div className="skills">
            <div className="section">
                <div className="skills-innerRef"/>
                <h1>Skills</h1>

                <div className="skills-grid">
                    <div className="card">
                        <h3>Front-end Development</h3>
                        <hr/>

                        <div className="card-details">
                            <FadeInSection type={"fade-in"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                                     alt="The logo icon for react" title="React"/>
                            </FadeInSection>

                            <FadeInSection type={"fade-in-2"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                     alt="The logo icon for Javascript" title="JavaScript"/>
                            </FadeInSection>

                            <FadeInSection type={"fade-in-3"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                                     alt="The logo icon for HTML 5" title="HTML 5"/>
                            </FadeInSection>

                            <FadeInSection type={"fade-in"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                                     alt="The logo icon for CSS3" title="CSS 3"/>
                            </FadeInSection>

                            <FadeInSection type={"fade-in-2"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
                                     alt="The logo icon for Bootstrap" title="Bootstrap"/>
                            </FadeInSection>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Back-end Development</h3>
                        <hr/>

                        <div className="card-details">
                            <FadeInSection className="col" type={"fade-in"}>
                                <span className={"img-label"}>Express.JS</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                     alt="The logo icon for Express" title="Express"/>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-2"}>
                                <span className={"img-label"}>jQuery</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                                     alt="The logo icon for jQuery" title="jQuery"/>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-3"}>
                                <span className={"img-label"}>Mongo DB</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                                     alt="The logo icon for MongoDB" title="Mongo DB"/>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in"}>
                                <span className={"img-label"}>MySQL</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                                     alt="The logo icon for MySQL" title="MySQL"/>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-2"}>
                                <span className={"img-label"}>NPM</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                                     alt="The logo icon for NPM" title="NPM"/>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-3"}>
                                <span className={"img-label"}>Node.JS</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                                     alt="The logo icon for NodeJS" title="Node JS"/>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in"}>
                                <span className={"img-label"}>Heroku</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg"
                                     alt="The logo icon for Heroku" title="Heroku"/>
                            </FadeInSection>

                            <FadeInSection className="col" type={"fade-in-2"}>
                                <span className={"img-label"}>Java</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                     alt="The logo icon for Java" title="Java"/>
                            </FadeInSection>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Project management</h3>
                        <hr/>

                        <div className="card-details">
                            <FadeInSection type={"fade-in"}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                                     alt="The logo icon for GitHub" title="GitHub"/>
                            </FadeInSection>

                            <FadeInSection type={"fade-in-3"}>
                                <img src={Scrumwise_Logo}
                                     alt="The logo icon for Scrumwise" title="Scrumwise"/>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}