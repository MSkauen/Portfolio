import React from "react";
import wcts from "../../shared/img/wcts_landing.webp";
import OpenNewTab from "../../shared/img/open_new_tab.svg";
import githubMark from "../../shared/img/GitHub-Mark-Light-64px.png";

export default function Projects () {
    return (
        <div className="projects">
            <div className="section">
                <div className="project-innerRef"/>
                <h4>Projects</h4>
                <div className="grid">
                    <div className="project-card">
                        <div className="card">
                                <h5>WCTS Homepage, CRM+CMS</h5>
                                <hr/>
                                <div className="project-details">
                                    <img src={wcts} alt="Working Class Tattoo Shop"/>
                                    <span className="project-label">
                                        <code>Jest</code>
                                        <code>React</code>
                                        <code>Node</code>
                                        <code>Express</code>
                                        <code>MongoDB</code>
                                        <code>Amazon S3</code>
                                        <code>Rest API</code>
                                    </span>
                                </div>
                            </div>
                        <div className="row call-to-action">
                            <button disabled={true} className="btn" title="Github Repository">
                                <img className="small-icon" src={githubMark} alt="GitHub Logo"/>
                            </button>

                            <a href="https://wcts.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <button className="btn" title="Live view">
                                  <img className="small-icon" src={OpenNewTab} alt="Open live website"/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}