import Header from './Header';
import Social from '../components/social';
import projectData from '../data/projectData.json';
import Footer from '../sections/Footer';
import React, { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
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

  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const renderContent = (text) => {
    if (!text) {
      return null; // Return null if text is undefined or null
    }

    const parts = text.split(/(```[\s\S]*?```|\[.*?\]\(.*?\))/g); // Split by code blocks and links

    return parts.map((part, index) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        // It's a code block
        const codeContent = part.slice(3, -3);
        return (
          <SyntaxHighlighter
            key={index}
            language='javascript'
            style={codeStyle}
          >
            {codeContent}
          </SyntaxHighlighter>
        );
      } else if (
        part.startsWith('[') &&
        part.includes('](') &&
        part.endsWith(')')
      ) {
        // It's a hyperlink
        const linkText = part.match(/\[(.*?)\]/)[1];
        const url = part.match(/\((.*?)\)/)[1];
        return (
          <a key={index} href={url} target='_blank' rel='noopener noreferrer'>
            {linkText}
          </a>
        );
      } else {
        // Regular text with line breaks
        return <span key={index}>{formatText(part)}</span>;
      }
    });
  };

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
          <h2 className='project-subheader'>{project.projectPunchline}</h2>
          <a
            className='project-button primary'
            href={project.projectURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Web App
          </a>
        </div>
        <Social />
      </div>
      <div className='project-body'>
        <p className='project-headers'>Summary</p>
        <p className='body-text'>{renderContent(project.summary)}</p>

        <p className='project-headers'>Technologies</p>
        <p className='body-text'>
          {project.technologies
            ? renderContent(project.technologies.join(', '))
            : 'N/A'}
        </p>

        <p className='project-headers'>Build Process</p>
        <p className='body-text'>{renderContent(project.buildProcess)}</p>

        <p className='project-headers'>Obstacles and Stretch Goals</p>
        <p className='body-text'>{renderContent(project.obstaclesStretch)}</p>
        <div className='project-button-container'>
          <a
            className='project-button secondary'
            href={project.projectURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Web App
          </a>

          <a
            className='project-button secondary'
            href={project.projectGit}
            target='_blank'
            rel='noopener noreferrer'
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
