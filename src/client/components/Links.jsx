import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesContainer () {
    return (
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: "#261c2c"
                },
                    fpsLimit: 30,
                    fullScreen: { enable: false },
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 70,
                                links: {
                                    enable: true,
                                    distance: 120,
                                    color: "#fff",
                                    opacity: 0.2,
                                    width: 1
                                },
                            },
                            repulse: {
                                distance: 100,
                                speed: 7,
                                maxSpeed: 40,
                                duration: 7,
                                factor: 0.3,
                            }
                        },
                    },
                    particles: {
                        color: {
                            value: "#fff"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000
                            },
                            limit: 0,
                            value: 150,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 5,
                                sync: false
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.05
                            },
                            value: 1
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.2
                            },
                            value: 1
                        }
                    },
                }
            }/>
    );
}