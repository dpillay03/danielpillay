import Social from '../components/social';
function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className='hero-container'>
      <div className='hero'>
        <h1 id='hero-header'>Hi, I'm Daniel Pillay</h1>
        <h2 id='hero-subheader'>
          A Seattle based Software Developer with a passion for all things tech
          and art, preferably in conjunction.
        </h2>
        <button
          className='button primary'
          onClick={() => scrollToSection('projects-section')}
        >
          Projects
        </button>
      </div>
      <Social />
    </div>
  );
}

export default Home;
