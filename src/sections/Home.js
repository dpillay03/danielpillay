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
          A Seattle based web and software developer dedicated to bridging the
          gap between technology and people.
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
