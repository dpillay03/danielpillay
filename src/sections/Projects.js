import { useEffect, useRef } from 'react';
import portfolioThumbnail from '../assets/daniel_pillay_portfolio.png';
import shouldWeGoThumbnail from '../assets/should_we_go.png';
import { Link } from 'react-router-dom';

import Flickity from 'flickity';
import 'flickity/css/flickity.css';

function Projects() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const flkty = new Flickity(carouselRef.current, {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
    });

    return () => flkty.destroy();
  }, []);

  return (
    <div className='projects-container'>
      <h1 className='section-headers'>Projects</h1>
      <hr className='section-header-hr'></hr>
      <div class='main-carousel' ref={carouselRef}>
        <div className='carousel-cell project-card'>
          <div className='two-col'>
            <div className='item'>
              <img
                className='project-image'
                src={shouldWeGoThumbnail}
                alt='Should We Go?'
              />
            </div>
            <div className='item'>
              <h3 className='project-title'>Should We Go?</h3>
              <p className='body-text'>
                "Should We Go?" is a web application that provides users with
                last-minute event recommendations based on their selected state
                and date. It also offers weather forecasts for those events to
                help users plan their outings more effectively.
              </p>
              <div className='tech-stack'>
                <div className='tech'>React</div>
                <div className='tech'>SeatGeek API</div>
                <div className='tech'>Weather API</div>
                <div className='tech'>Axios</div>
                <div className='tech'>GH-PAGES</div>
              </div>
              <a href='/blog/should-we-go' className='button secondary'>
                Explore Project
              </a>
            </div>
          </div>
        </div>
        <div className='carousel-cell project-card'>
          <div className='two-col'>
            <div className='item'>
              <img className='project-image' src={portfolioThumbnail} />
            </div>
            <div className='item'>
              <h3 className='project-title'>
                Daniel Pillay - Portfolio Website
              </h3>
              <p className='body-text'>
                Welcome to my portfolio! I want to use this website as a
                platform to introduce myself to the world, showcase my work, and
                connect with potential clients or employers.
              </p>
              <div className='tech-stack'>
                <div className='tech'>React</div>
                <div className='tech'>HTML5</div>
                <div className='tech'>CSS3</div>
                <div className='tech'>NPM</div>
                <div className='tech'>EMAIL.JS</div>
                <div className='tech'>GH-PAGES</div>
              </div>
              <a to='/blog/portfolio-website' className='button secondary'>
                Explore Project
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
