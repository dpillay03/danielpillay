import React, { useState } from 'react';
import MobileNav from './mobileNav';
import logoImage from '../assets/logo.png';
import { CgMenuRight } from 'react-icons/cg';

function Header({ isBlogPage }) {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const scrollToSection = (sectionId) => {
    if (isBlogPage) {
      window.location.href = `/#${sectionId}`; // Redirect to the homepage with the correct section.
    } else {
      const section = document.getElementById(sectionId);
      section && section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileNavVisible(false);
    }
  };

  return (
    <header className='site-header'>
      <div
        className={`background-overlay ${isMobileNavVisible ? 'visible' : ''}`}
        onClick={toggleMobileNav}
      />
      <div className='nav-icon'>
        <img id='nav-logo' src={logoImage} />
        <h1 id='nav-name'>Daniel Pillay</h1>
      </div>
      <nav className='navigation'>
        <ul>
          <li id='home-link' onClick={() => scrollToSection('home-section')}>
            Home
          </li>
          <li id='about-link' onClick={() => scrollToSection('about-section')}>
            About
          </li>
          <li
            id='projects-link'
            onClick={() => scrollToSection('projects-section')}
          >
            Projects
          </li>
          <li
            id='experience-link'
            onClick={() => scrollToSection('experience-section')}
          >
            Experience
          </li>
          <li
            id='services-link'
            onClick={() => scrollToSection('services-section')}
          >
            Services
          </li>
          <li
            id='contact-link'
            onClick={() => scrollToSection('contact-section')}
          >
            Contact
          </li>
          <li id='mobile-toggle' onClick={toggleMobileNav}>
            <CgMenuRight size={60} />
          </li>
        </ul>
      </nav>
      <MobileNav
        isVisible={isMobileNavVisible}
        toggleNav={toggleMobileNav}
        scrollToSection={scrollToSection}
      />
    </header>
  );
}
Header.defaultProps = {
  isBlogPage: false,
};
export default Header;
