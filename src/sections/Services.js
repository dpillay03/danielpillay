import dev from '../assets/develop.png';
import manage from '../assets/managment.png';
import update from '../assets/rebrand.png';
function Services() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className='services'>
      <h1 className='section-headers'>Services</h1>
      <hr></hr>
      <div className='services-container'>
        <div className='services-card'>
          <img src={dev} className='services-icon' />
          <h3 className='service-title'>Web Design and Development</h3>
          <p className='service-description'>
            Elevate your online presence with powerful web design and
            development services tailored to your specific needs. I offer
            comprehensive solutions, including Google Analytics integration and
            the latest SEO strategies. My expertise spans various platforms
            including WordPress, Shopify, BigCommerce, Wix, and Squarespace,
            ensuring a seamless and scalable online presence.
          </p>
          <a
            className='button secondary'
            onClick={() => scrollToSection('contact-section')}
          >
            Select Package
          </a>
        </div>
        <div className='services-card'>
          <img src={manage} className='services-icon' />
          <h3 className='service-title'>Website Management</h3>
          <p className='service-description'>
            Opt for ongoing, professional website management with a monthly
            subscription service designed to keep your site at peak performance.
            Let me handle all aspects of your site's functionality, perform
            regular updates, and ensure that it remains at the cutting edge of
            technology and design trends. Please note, rebranding services are
            available but not included in the standard management package.
          </p>
          <a
            className='button secondary'
            onClick={() => scrollToSection('contact-section')}
          >
            Select Package
          </a>
        </div>
        <div className='services-card'>
          <img src={update} className='services-icon' />
          <h3 className='service-title'>Website Updates & Rebrands</h3>
          <p className='service-description'>
            Keep your website fresh and relevant with targeted updates or
            undergo a complete rebrand to reflect your evolving business
            identity. I specialize in seamless transitions across content
            management systems and revitalizing your brand’s digital presence,
            making sure your website not only looks great but also aligns
            perfectly with your business strategy and customer expectations.
          </p>
          <a
            className='button secondary'
            onClick={() => scrollToSection('contact-section')}
          >
            Select Package
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
