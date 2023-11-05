import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBG = () => (
    <Particles
        id="tsparticles"
        init={loadFull}
        height="100vh"
        options={{
            fpsLimit: 40,
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: [
                        "#111827",
                        "#394151",
                        "rgb(229, 231, 235)",
                        "rgb(209, 213, 219)",
                        "rgb(229, 231, 235)",
                        "rgb(229, 231, 235)",
                    ],
                },
                opacity: {
                    value: 0.8,
                    random: true,
                },
                size: {
                    value: 6,
                    random: true,
                },
                move: {
                    enable: true,
                    speed: 6,
                    random: false,
                },
            },
            interactivity: {
                events: {
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                detectsOn: "window",
            },
            background: {
                image: "radial-gradient(rgb(17, 24, 39), black)",
            },
            fullScreen: { enable: true },
        }}
    />
);

export default ParticleBG;
