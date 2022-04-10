import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FadeInSection from "../lib/FadeInSection";

export default function Skills () {

    const icon = (
        <Paper sx={{ m: 1 }} elevation={4}>
            <Box component="svg" sx={{ width: 100, height: 100 }}>
                <Box
                    component="polygon"
                    sx={{
                        fill: (theme) => theme.palette.common.white,
                        stroke: (theme) => theme.palette.divider,
                        strokeWidth: 1,
                    }}
                    points="0,100 50,00, 100,100"
                />
            </Box>
        </Paper>
    );

    return (
        <div className="skills">
            <div className="section">
                <div className="skills-innerRef"/>

                    <h1>
                        Skills
                    </h1>

                    <div className="skills-grid">
                        <div className="card">
                            <h3>Front-end Development</h3>
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
                            <div className="card-details">
                                <FadeInSection type={"fade-in"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                         alt="The logo icon for Express" title="Express"/>
                                </FadeInSection>

                                <FadeInSection type={"fade-in-2"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                                         alt="The logo icon for jQuery" title="jQuery"/>
                                </FadeInSection>

                                <FadeInSection type={"fade-in-3"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                                         alt="The logo icon for MongoDB" title="Mongo DB"/>
                                </FadeInSection>

                                <FadeInSection type={"fade-in"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                                         alt="The logo icon for MySQL" title="MySQL"/>
                                </FadeInSection>

                                <FadeInSection type={"fade-in-2"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                                         alt="The logo icon for NPM" title="NPM"/>
                                </FadeInSection>

                                <FadeInSection type={"fade-in-3"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                                         alt="The logo icon for NodeJS" title="Node JS"/>
                                </FadeInSection>

                                <FadeInSection type={"fade-in"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg"
                                         alt="The logo icon for Heroku" title="Heroku"/>
                                </FadeInSection>

                                <FadeInSection type={"fade-in-2"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                         alt="The logo icon for Java" title="Java"/>
                                </FadeInSection>
                            </div>
                        </div>
                        <div className="card">
                            <h3>Version control / Project management</h3>
                            <div className="card-details">
                                <FadeInSection type={"fade-in"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                                         alt="The logo icon for GitHub" title="GitHub"/>
                                </FadeInSection>

                                <FadeInSection type={"fade-in-2"}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                                         alt="The logo icon for Git" title="Git"/>
                                </FadeInSection>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}