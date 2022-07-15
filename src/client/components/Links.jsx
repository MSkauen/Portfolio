import React from "react";
import Particles from "react-tsparticles";

export function ParticlesContainer () {
    return (
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: "#17121c"
                },
                    fpsLimit: 30,
                    fullScreen: { enable: true },
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
                                enable: false,
                                area: 10
                            },
                            limit: 0,
                            value: 50,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 0.5,
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
                }
            >
            </Particles>
    );
}