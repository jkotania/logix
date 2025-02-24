declare module "particles.js" {
  interface ParticlesConfig {
    particles: {
      number: {
        value: number;
        density: {
          enable: boolean;
          value_area: number;
        };
      };
      color: {
        value: string;
      };
      shape: {
        type: string;
        stroke: {
          width: number;
          color: string;
        };
      };
      opacity: {
        value: number;
        random: boolean;
        anim: {
          enable: boolean;
          speed: number;
          opacity_min: number;
          sync: boolean;
        };
      };
      size: {
        value: number;
        random: boolean;
        anim: {
          enable: boolean;
          speed: number;
          size_min: number;
          sync: boolean;
        };
      };
      line_linked: {
        enable: boolean;
        distance: number;
        color: string;
        opacity: number;
        width: number;
      };
      move: {
        enable: boolean;
        speed: number;
        direction: string;
        random: boolean;
        straight: boolean;
        out_mode: string;
        bounce: boolean;
      };
    };
    interactivity: {
      detect_on: string;
      events: {
        onhover: {
          enable: boolean;
          mode: string;
        };
        onclick: {
          enable: boolean;
          mode: string;
        };
        resize: boolean;
      };
      modes: {
        repulse: {
          distance: number;
          duration: number;
        };
        push: {
          particles_nb: number;
        };
      };
    };
    retina_detect: boolean;
  }

  interface Particles {
    load(id: string, path: string, callback: () => void): void;
    setOnClickHandler(callback: (event: MouseEvent) => void): void;
  }

  const particlesJS: {
    (id: string, config: ParticlesConfig): void;
    load: (id: string, path: string, callback: () => void) => void;
  };

  export default particlesJS;
}

declare global {
  interface Window {
    particlesJS: typeof import("particles.js").default;
  }
}
