import placeholder from '../assets/dp_headshot.png';
function About() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className='about-container'>
      <h1 className='section-headers'>About Me</h1>
      <hr></hr>
      <div className='two-col'>
        <div className='item'>
          <img
            id='headshot'
            src={placeholder}
            alt="Daniel Pillay's professional headshot photo"
          />
        </div>
        <div className='item'>
          <h3>My story, my mission</h3>
          <p className='body-text'>
            Hello! I am an Air Force veteran turned full-stack software
            developer with over 6 years of industry and freelance experience. I
            have worked with a broad range of clients, from local businesses to
            multinational large-scale enterprises located in the US and abroad.
            <br />
            <br />
            Leveraging my versatile expertise in software development, digital
            marketing, and UI/UX design, I aim to create compelling websites and
            applications that propel brands and businesses to new heights
            <br />
            <br />
            Beyond my professional pursuits, I look forward to exploring life's
            adventures with my wife and our Mini Goldendoodle, Milo. I am an
            avid enthusiast and practitioner of Brazilian Jiu-jitsu, Judo, Muay
            Thai and Hot Yoga. My leisure time is filled with reading, tuning
            into podcasts, supporting Seattle sports teams, and indulging in
            various interests.
            <br />
            <br />I am{' '}
            <span className='body-text-span'>
              currently open to freelance opportunities!
            </span>{' '}
            If you're looking to elevate your brand with a new or updated
            website, rebrand, website management, or simply seeking a
            collaborative partnership, don't hesitate to connect.
          </p>
          <button
            className='button secondary'
            onClick={() => scrollToSection('contact-section')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
