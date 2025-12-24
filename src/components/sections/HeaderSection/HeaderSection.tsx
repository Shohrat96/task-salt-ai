import React, { useState } from "react";
import { Button } from "../../ui-kit/Button";
import "./HeaderSection.scss";

export const HeroSection: React.FC = () => {
  const [showStats, setShowStats] = useState(false);

  const handleShowStats = () => {
    setShowStats(true);
  };
  return (
    <section id="hero" className="section hero relative">
      {/* <img className="hero-bg hidden md:block" src="/hero-bg-img.webp" alt="Hero Background Image" /> */}

      <div className="flex justify-center gap-5 z-50">
        <Button onClick={handleShowStats}>How it works</Button>
        <Button bg>Buy Salt AI</Button>
      </div>

      <div className="container flex flex-col text-center md:text-left md:justify-center md:h-full gap-10">
        <header
          className={`flex flex-col gap-2 ${
            showStats ? "header-moved-up" : ""
          }`}
        >
          <h1
            className={showStats ? "secondary-gradient-text" : "gradient-text"}
          >
            <p>A new economic primitive for funding decentralized AI</p>
          </h1>

          <p className="text-lead">
            We track, rank and pay for the best open source decentralized LLMs
            to compete against OpenAI
          </p>

          <div className="flex gap-5 mt-4">
            <Button size="big" bg onClick={handleShowStats}>
              Buy Salt AI
            </Button>
            <Button size="big">Try Now</Button>
          </div>
        </header>

        <div className={`stats-grid ${showStats ? "stats-grid-visible" : ""}`}>
          <div className="stat-card">
            <div className="stat-number">10,873</div>
            <div className="stat-label">LLM models</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">$72,470,728</div>
            <div className="stat-label">paid to data scientists</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">6,557</div>
            <div className="stat-label">members community</div>
          </div>
        </div>
      </div>
    </section>
  );
};
