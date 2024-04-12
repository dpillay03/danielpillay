import React from 'react';
import logoImage from '../assets/logo.png';

const MobileNav = ({ isVisible, toggleNav, scrollToSection }) => {
  if (!isVisible) return null;

  return (
    <nav className='mobile-navigation'>
      <ul>
        <li>
          <img src={logoImage} style={{ height: '100px', width: 'auto' }} />
        </li>
        <li
          onClick={() => {
            scrollToSection('home-section');
            toggleNav();
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection('about-section');
            toggleNav();
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            scrollToSection('projects-section');
            toggleNav();
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            scrollToSection('contact-section');
            toggleNav();
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
