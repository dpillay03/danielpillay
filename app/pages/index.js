import dynamic from 'next/dynamic';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Services from '../src/components/Services';
import Layout from '../src/layout/Layout';
const Portfolio = dynamic(() => import('../src/components/Portfolio'), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id='home'
        data-nav-tooltip='Home'
        className='pp-section pp-scrollable'
      >
        <div className='home-banner'>
          <div className='container'>
            <div className='row full-screen align-items-center'>
              <div className='col-lg-6'>
                <div className='type-box'>
                  <h6>Hello, I am</h6>
                  <h1 className='font-alt'>Daniel Pillay</h1>
                  <p className='lead'>UX Engineer & Software Developer</p>
                  <p className='desc'>
                    Results driven software developer passionate about
                    transforming your ideas into robust and effective websites
                    and applications.
                  </p>
                  <div className='btn-bar'>
                    <a className='px-btn px-btn-theme' href='#contactus'>
                      Contact me
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='hb-img'>
                  <img
                    className='secondary-portrait'
                    src='static/img/secondary-portrait.jpg'
                    title=''
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      {/*<Portfolio /> */}
      {/* End Portfolio */}
      {/* Blog */}
      {/*<Blog />*/}
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
