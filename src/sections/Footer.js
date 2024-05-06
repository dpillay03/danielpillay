import SocialFooter from '../components/footerSocial.js';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='two-col' id='footer'>
        <div className='item'>
          <h1 className='footer-header'>Daniel Pillay</h1>
          <p className='body-subtext footer'>
            A Seattle based Software Developer with a passion for all things
            tech and art, preferably in conjunction.
          </p>
        </div>
        <div className='item'>
          <h1 className='footer-header'>Let's Connect!</h1>
          <SocialFooter />
        </div>
      </div>
      <p className='copyright'>
        © Copyright <span id='year'>2024</span> . Built by Daniel Pillay
      </p>
    </div>
  );
}

export default Footer;
