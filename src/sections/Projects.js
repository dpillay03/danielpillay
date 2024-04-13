import portfolioThumbnail from '../assets/daniel_pillay_portfolio.png';
function Projects() {
  return (
    <div className='projects-container'>
      <h1 className='section-headers'>Projects</h1>
      <hr className='section-header-hr'></hr>
      <div className='project-card'>
        <div className='two-col'>
          <div className='item'>
            <img className='project-image' src={portfolioThumbnail} />
          </div>
          <div className='item'>
            <h3 className='project-title'>Daniel Pillay - Portfolio Website</h3>
            <p className='body-text'>
              Welcome to my portfolio! I want to use this website as a platform
              to introduce myself to the world, showcase my work, and connect
              with potential clients or employers.
            </p>
            <div className='tech-stack'>
              <div className='tech'>React</div>
              <div className='tech'>HTML5</div>
              <div className='tech'>CSS3</div>
              <div className='tech'>NPM</div>
              <div className='tech'>GH-PAGES</div>
            </div>
            {/* <button className='button secondary'>Learn More</button> */}
          </div>
        </div>
      </div>
      <p className='project-disclaimer'>
        <span className='project-span'>UPDATE: </span>During the next few weeks
        I plan on touching up a few of my personal projects and adding them
        above. In the mean time, feel free to check out my{' '}
        <a href='https:://github.com/dpillay03'>GitHub</a> to see my work!
      </p>
    </div>
  );
}

export default Projects;
