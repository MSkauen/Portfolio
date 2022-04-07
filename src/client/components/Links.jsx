import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import React from "react";

export default function ParticlesContainer () {

    return (
        <div className="particle-wrapper">
            <Particles id="tsparticles"
            options={{
                background: {
                    color: "#000"
            },
                fpsLimit: 60,
                fullScreen: { enable: false },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 50,
                            duration: 1.4,
                            speed: 0.01,
                        },
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
                        value: 400,
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
                            minimumValue: 0.5
                        },
                        value: 1
                    }
                },
            }
            }>

            </Particles>
        </div>

    )
}