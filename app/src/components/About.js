import React, { useState } from 'react';
const About = () => {
  const [imageSrc, setImageSrc] = useState('static/img/Portrait.PNG');
  const handleHover = (event) => {
    const itemId = event.target.id;
    const imageUrls = {
      jiuJjitsu: 'static/img/BJJ.png',
      milo: 'static/img/Milo.png',
      newExp: 'static/img/skydive.PNG',
    };
    setImageSrc(imageUrls[itemId] || '');
  };
  return (
    <section
      id='about'
      data-nav-tooltip='About'
      className='pp-section pp-scrollable section counter'
    >
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-lg-6 m-15px-tb'>
            <div className='about-me'>
              <div className='img'>
                <div className='img-in'>
                  <img className='about-img' src='static/img/Portrait.PNG' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 m-15px-tb'>
            <div className='about-info'>
              <div className='title'>
                <h3>About me.</h3>
              </div>
              <div className='about-text'>
                <h3>
                  {`I'm`} an Air Force veteran turned Software Developer with
                  over 7 years of experience.{' '}
                </h3>
                <p>
                  Leveraging the power of code, I strive to bridge the gap
                  between your ideas and reality. I have a diverse background,
                  working in various industries from small businesses to
                  large-scale enterprises. I specialize in eCommerce
                  development, and I am proficient in working with platforms
                  like Shopify, WordPress, BigCommerce, and testing tools like
                  VWO. I am also well-versed in various programming languages
                  like JavaScript, Java, Python, PHP, and more
                </p>
              </div>
              <div className='portfolio-filter-01'>
                <div className='title'>
                  <h3>Hobbies & Interests.</h3>
                </div>
                <ul className='filter nav'>
                  <li
                    className='c-pointer'
                    id='jiuJitsu'
                    onMouseEnter={handleHover}
                  >
                    Jiu-Jitsu.
                  </li>
                  <li
                    className='c-pointer'
                    id='judo'
                    //onMouseEnter={handleHover}
                  >
                    Judo.
                  </li>
                  <li
                    className='c-pointer'
                    id='guitars'
                    // onMouseEnter={handleHover}
                  >
                    Guitars.
                  </li>
                  <li
                    className='c-pointer'
                    id='milo'
                    onMouseEnter={handleHover}
                  >
                    Milo the Dood.
                  </li>
                  <li
                    className='c-pointer'
                    id='traveling'
                    //onMouseEnter={handleHover}
                  >
                    Traveling.
                  </li>
                  <li
                    className='c-pointer'
                    id='hot-yoga'
                    //onMouseEnter={handleHover}
                  >
                    Hot Yoga.
                  </li>
                  <li
                    className='c-pointer'
                    id='newExp'
                    onMouseEnter={handleHover}
                  >
                    New experiences.
                  </li>
                </ul>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
