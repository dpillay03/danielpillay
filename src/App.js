import React from 'react';
import './styles/App.css';

import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/Header';
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='home-section'>
          <Home />
        </section>
        <section id='about-section'>
          <About />
        </section>
        <section id='projects-section'>
          <Projects />
        </section>
        <section id='contact-section'>
          <Contact />
        </section>
        <section id='footer-section'>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
