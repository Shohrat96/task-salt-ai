import React from 'react';

const logos = [
  { name: 'SOLANA', image: `${import.meta.env.BASE_URL}projects/solana.webp` },
  { name: 'Arweave', image: `${import.meta.env.BASE_URL}projects/arweave.webp` },
  { name: 'Bittensor', image: `${import.meta.env.BASE_URL}projects/bittensor.webp` },
  { name: 'Unknown 1', image: `${import.meta.env.BASE_URL}projects/unknown1.webp` },
  { name: 'Unknown 2', image: `${import.meta.env.BASE_URL}projects/unknown2.webp` }
];

export const IntegratedProjects: React.FC = () => {
  return (
    <section id='projects' className="section">
      <div className="container flex flex-col gap-2 md:justify-center md:h-full">
        <h3 className="text-center">Projects integrated into the Arrakis AI Ecosystem</h3>

        <div className="carousel-wrapper mt-1">
          <div className="carousel-track">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="logo-item">
                <div className="logo-image">
                  <img src={logo.image} alt={logo.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

