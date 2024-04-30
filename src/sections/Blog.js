import Header from './Header';
import Social from '../components/social';
import projectData from '../data/projectData.json';
import Footer from '../sections/Footer';
import React, { useEffect } from 'react';

function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pathSegments = window.location.pathname.split('/');
  const slug =
    pathSegments.length > 1 ? pathSegments.pop().replace(/^\/+/g, '') : '';
  const project = projectData.find((project) => project.projectSlug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='blog-post'>
      <Header isBlogPage={true} />
      <div className='hero-container'>
        <div className='hero'>
          <h1 className='project-header'>{project.projectName}</h1>
          <img
            className='project-image'
            src={project.projectImage}
            alt={project.projectName}
          />
          <h2 className='project-subheader'>
            Last-minute plans, instant results. Your go-to for events and
            weather, right when you need it.
          </h2>
          <a
            className='project-button primary'
            href={project.projectURL}
            target='_blank'
          >
            View Web App
          </a>
        </div>
        <Social />
      </div>
      <div className='project-body'>
        <p className='project-headers'>Technologies</p>
        <p className='body-text'>{project.technologies.join(', ')}</p>

        <p className='project-headers'>Summary</p>
        <p className='body-text'>{project.summary}</p>

        <p className='project-headers'>Build Process</p>
        <p className='body-text'>{project.buildProcess}</p>

        <p className='project-headers'>Obstacles and Stretch Goals</p>
        <p className='body-text'>{project.obstaclesStretch}</p>
        <div className='project-button-container'>
          <a
            className='project-button secondary'
            href={project.projectURL}
            target='_blank'
          >
            View Web App
          </a>

          <a
            className='project-button secondary'
            href={project.projectGit}
            target='_blank'
          >
            View Github Repo
          </a>
        </div>
      </div>
      <section id='footer-section'>
        <Footer />
      </section>
    </div>
  );
}

export default BlogPage;
