import React from 'react';
import logoImage from '../assets/logo.png';
import { IoMdClose } from 'react-icons/io';
import SocialFooter from '../components/footerSocial.js';

const MobileNav = ({ isVisible, toggleNav, scrollToSection }) => {
  if (!isVisible) return null;

  return (
    <nav className='mobile-navigation'>
      <IoMdClose className='close-mobile' size={30} onClick={toggleNav} />
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
            scrollToSection('experience-section');
            toggleNav();
          }}
        >
          Experience
        </li>
        <li
          onClick={() => {
            scrollToSection('services-section');
            toggleNav();
          }}
        >
          Services
        </li>
        <li
          onClick={() => {
            scrollToSection('contact-section');
            toggleNav();
          }}
        >
          Contact
        </li>
        <SocialFooter />
      </ul>
    </nav>
  );
};

export default MobileNav;
