import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all"

export async function loadParticles(options: any) {
  await loadAll(tsParticles);

  await tsParticles.load({ id: "tsparticles", options });
}

export const configs = {
  particles: {
    number: {
      value: (window.innerWidth * screen.height) / 8500
    },
    color: {
      value: "#a75a27"
    },
    links: {
      enable: true,
      distance: 120,
      color: {
        value: "#733912"
      }
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: .5
    },
    size: {
      value: {
        min: 2,
        max: 4
      }
    },
    move: {
      enable: true,
      speed: 1.6
    }
  },
  poisson: {
    enable: true
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "repulse"], 
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 250,   
        duration: 1,
        speed: .5,   
      },
      repulse: {
        distance: 100,   
        duration: .2,
        speed: .4,   
      },
    },
  }
};

loadParticles(configs);