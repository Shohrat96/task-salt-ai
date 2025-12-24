import React from "react";
import { Button } from "@components/ui-kit/Button";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="info" className="section">
      <div className="container flex flex-col text-center md:text-left gap-5 md:h-full md:justify-center">
        <div>
          <h3>Crowdsourcing our collective</h3>
          <h3>intelligence to build the best AI</h3>
        </div>

        <div>
          <p>
            {" "}
            Open source AIs have been lagging in development behind OpenAI with
            billions of dollars.
          </p>
          <p>
            We run competitions between AI models to find and pay for the best
            AI model.
          </p>
          <p>Users will be able to access the best AI models.</p>
        </div>

        <Button bg size="big" className="md:self-start">
          Use The Cutting Edge AI
        </Button>
      </div>
    </section>
  );
};
