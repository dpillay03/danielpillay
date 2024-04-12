import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

function socialFooter() {
  return (
    <div className='footer-social-container'>
      <a
        className='footer-social-links'
        href='https://www.linkedin.com/in/danielpillay/'
        target='_blank'
      >
        <FaLinkedin size={30} />
      </a>
      <a
        className='footer-social-links'
        href='https://github.com/dpillay03'
        target='_blank'
      >
        <FaGithubSquare size={30} />
      </a>
      <a
        className='footer-social-links'
        href='https://www.instagram.com/dpillay3/'
        target='_blank'
      >
        <FaInstagramSquare size={30} />
      </a>
      <a
        className='footer-social-links'
        href='https://www.facebook.com/dan3pillay'
        target='_blank'
      >
        <FaFacebookSquare size={30} />
      </a>
      <a
        className='footer-social-links'
        href='https://www.youtube.com/channel/UCCFoaR1kuuDhhHgSwD9j9Mw'
        target='_blank'
      >
        <FaYoutubeSquare size={30} />
      </a>
    </div>
  );
}
export default socialFooter;
