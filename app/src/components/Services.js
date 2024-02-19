import dynamic from 'next/dynamic';
import GitHubCalendar from 'react-github-calendar';

const Testimonials = dynamic(() => import('./Testimonials'), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id='services'
      data-nav-tooltip='Services'
      className='pp-section pp-scrollable section counter'
    >
      <div className='container'>
        <div className='separated' />
        <div className='title'>
          <h3>Experience.</h3>
        </div>
        <div className='resume-box'>
          <div className='resume-row'>
            <div className='row'>
              <div className='col-sm-3 col-md-3 col-xl-2'>
                <div className='rb-left'>
                  <img src='static/img/webdev.png' title='' alt='' />
                </div>
              </div>
              <div className='col-sm-9 col-md-9 col-xl-10'>
                <div className='rb-right'>
                  <h6>UX Engineer & Front-end Developer</h6>
                  <label>Outerbox | Remote | April 2022 - Present</label>
                  <div className='rb-time'>Full Time</div>
                  <p>
                    Developed, optmized, and implemented tests for a diverse
                    range of clients in the eCommerce industry levereaging
                    various platforms like Wordpress, Shopify, VWO, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='resume-row'>
            <div className='row'>
              <div className='col-sm-3 col-md-3 col-xl-2'>
                <div className='rb-left'>
                  <img src='static/img/alcw.png' title='' alt='' />
                </div>
              </div>
              <div className='col-sm-9 col-md-9 col-xl-10'>
                <div className='rb-right'>
                  <h6>Webmaster and Digital Marketing Manager</h6>
                  <label>
                    Amazing Life Chiropractic | Mill Creek, WA | Jan 2019 -
                    April 2022
                  </label>
                  <div className='rb-time'>Full Time</div>
                  <p>
                    Designed, developed and maintained company website. Managed
                    SEO and PPC campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='resume-row'>
            <div className='row'>
              <div className='col-sm-3 col-md-3 col-xl-2'>
                <div className='rb-left'>
                  <img src='static/img/flow state.png' title='' alt='' />
                </div>
              </div>
              <div className='col-sm-9 col-md-9 col-xl-10'>
                <div className='rb-right'>
                  <h6>Web Developer, Owner</h6>
                  <label>
                    Flow State Media | Seattle, WA | April 2017 - January 2019
                  </label>
                  <div className='rb-time'>Freelance</div>
                  <p>
                    Owner and operator of Flow State Media LLC, a web design and
                    marketing agency for the health, wellness, and fitness
                    industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='resume-row'>
            <div className='row'>
              <div className='col-sm-3 col-md-3 col-xl-2'>
                <div className='rb-left'>
                  <img src='static/img/air force.png' title='' alt='' />
                </div>
              </div>
              <div className='col-sm-9 col-md-9 col-xl-10'>
                <div className='rb-right'>
                  <h6>Security Forces Personnel </h6>
                  <label>
                    United States Air Force | USA | April 2013 - April 2017
                  </label>
                  <div className='rb-time'>Full Time</div>
                  <p>
                    Led, managed, and performed law enforcement and force
                    protection duties to protect on-base personnel and national
                    resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='title'>
          <h3>Education &amp; Skills</h3>
        </div>
        <div className='row'>
          <div className='col-lg-4 m-15px-tb'>
            <ul className='aducation-box'>
              <li>
                <span>2019-2022</span>
                <h6>Bachelor of Science - Computer Science</h6>
                <p>Colorado State University, Global Campus – Aurora, CO </p>
              </li>
              <li>
                <span>2018-2019</span>
                <h6>
                  Certificate in Advanced Software Development in Full Stack
                  JavaScript
                </h6>
                <p>Code Fellows Coding Academy - Seattle WA </p>
              </li>
              <li>
                <span>2017-2018</span>
                <h6>Associate of Arts</h6>
                <p>Shoreline Community College - Shoreline, WA</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='row githubContributions'>
          <div className='title'>
            <h3>Github Contributions</h3>
          </div>
          <GitHubCalendar username='dpillay03' />
        </div>
        <div className='separated' />
      </div>
    </section>
  );
};
export default Services;
