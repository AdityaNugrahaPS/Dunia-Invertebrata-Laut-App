import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#ffffff", // Warna latar belakang solid (hitam)
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#16a34a", // Partikel diubah menjadi putih
                    },
                    links: {
                        color: "#16a34a", // Warna garis antar partikel menjadi putih
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.9, // Atur transparansi partikel lebih solid
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 5 }, // Ukuran partikel lebih terlihat
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
