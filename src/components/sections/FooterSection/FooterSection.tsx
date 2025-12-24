import React from 'react';
import { Button } from '@components/ui-kit/Button';
import { Divider } from '../../ui-kit/Divider';
import "./FooterSection.scss";

export const FooterSection: React.FC = () => {
  const footerLinks = {
    main: [
      { label: 'Home', href: '#' },
      { label: 'Leaderboard', href: '#' },
      { label: 'About', href: '#' },
    ],
    legal: [
      { label: 'Terms of Use', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Global Policy', href: '#' },
    ],
  };

  return (
    <footer className="section footer-section">
      <img src="/footer-bg-img-1.webp" alt="Footer Background Image 1" className="footer-bg-img-1" />

      <div className="container grid grid-cols-1 text-center md:text-left md:grid-cols-2 items-center grow">
        <div className="flex flex-col gap-2">
          <h3>Text here</h3>

          <p className="my-5">
            Every month, we run a competition between all the AI models submitted on a
            leaderboard. The best model will be featured and will earn tokens.
          </p>

          <Button bg size="big" className="md:self-start">
            Read Whitepaper
          </Button>
        </div>

        <img
          src="/footer-bg-img-2.webp"
          alt="Footer Background Image 2"
          className="hidden md:block justify-self-end footer-bg-img-2 "
        />
      </div>


      <div className='bottom-navigation'>
        <div className="links-group text-center flex justify-center my-1">
          <ul>
            {footerLinks.main.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <Divider className="hidden md:block" />


        <div className="flex justify-center md:justify-between my-1">
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>

          <div className="links-group text-center flex flex-content-center md:flex-content-end">
            <ul>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

