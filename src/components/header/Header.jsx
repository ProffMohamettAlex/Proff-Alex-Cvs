import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Proff MohaMett TahLiiL</h1>
        <h5 className="text-light">Full-stack Web Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Rebeat Again 
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
