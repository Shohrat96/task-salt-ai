import { HeroSection } from "./components/sections/HeaderSection/HeaderSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection/HowItWorksSection";
import { IntegratedProjects } from "./components/sections/IntegratedProjectsSection/IntegratedProjectsSection";
import { LeaderboardSection } from "./components/sections/LeaderboardSection/LeaderboardSection";
import { FooterSection } from "./components/sections/FooterSection/FooterSection";
import { useRef } from "react";
import { useParallax } from "./hooks/useParallax";
import "./App.scss";

function App() {
  const bgRef = useRef<HTMLImageElement>(null);

  const parallaxStyle = useParallax(bgRef, {
    speed: 0.1,
    fadeStart: window.innerHeight * 3,
    fadeEnd: window.innerHeight * 4,
  });

  return (
    <div className="App">
      <img
        ref={bgRef}
        src={`${import.meta.env.BASE_URL}hero-bg-img.webp`}
        alt="Parallax Background"
        style={{
          position: "fixed",
          bottom: "-10%",
          right: 0,
          width: "auto",
          height: "100%",
          objectFit: "contain",
          zIndex: -1,
          transform: `scale(1) translateY(${-window.scrollY * 0.3}px)`,
          transformOrigin: "bottom right",
          opacity: parallaxStyle.opacity,
        }}
      />

      {/* Sections */}
      <HeroSection />
      <HowItWorksSection />
      <LeaderboardSection />
      <IntegratedProjects />
      <FooterSection />
    </div>
  );
}

export default App;
