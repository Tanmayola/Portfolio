"use client";
import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

export default function BackgroundAnimation() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: "transparent",
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
              distance: 180,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888", "#833ab4"],
          },
          links: {
            color: "#e1306c",
            distance: 140,
            enable: true,
            opacity: 0.22,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 850,
            },
            value: 70,
          },
          opacity: {
            value: { min: 0.2, max: 0.65 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3.5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
