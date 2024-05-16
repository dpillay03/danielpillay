import workIcon from '../assets/work-icon.png';
import eduIcon from '../assets/edu-icon .png';
function Experience() {
  return (
    <div className='experience-container'>
      <h1 className='section-headers'>Experience</h1>
      <hr className='section-header-hr'></hr>
      <div className='project-card'>
        <div className='two-col'>
          <div className='item'>
            <h3 className='experience-title'>Work</h3>
            <div className='experience-card'>
              <div className='experience-header'>
                <img src={workIcon} className='experience-icon' />
                <h3 className='experience-institution'>OuterBox</h3>
              </div>
              <p className='experience-position'>
                Frontend Developer & UX Engineer
              </p>
              <p className='experience-date'>April 2022 to April 2024</p>
            </div>

            <div className='experience-card'>
              <div className='experience-header'>
                <img src={workIcon} className='experience-icon' />
                <h3 className='experience-institution'>
                  Amazing Life Chiropractic and Wellness
                </h3>
              </div>
              <p className='experience-position'>
                Web Developer & Digital Marketing Strategist
              </p>
              <p className='experience-date'>January 2019 to March 2022</p>
            </div>
            <div className='experience-card'>
              <div className='experience-header'>
                <img src={workIcon} className='experience-icon' />
                <h3 className='experience-institution'>
                  Flow State Media, LLC
                </h3>
              </div>
              <p className='experience-position'>
                Owner & Freelance Web Developer
              </p>
              <p className='experience-date'>June 2017 to Current</p>
            </div>
            <div className='experience-card'>
              <div className='experience-header'>
                <img src={workIcon} className='experience-icon' />
                <h3 className='experience-institution'>
                  United States Air Force
                </h3>
              </div>
              <p className='experience-position'>Security Forces Specialist</p>
              <p className='experience-date'>April 2013 to April 2017</p>
            </div>
          </div>
          <div className='item'>
            <h3 className='experience-title'>Education</h3>
            <div className='experience-card'>
              <div className='experience-header'>
                <img src={eduIcon} className='experience-icon' />
                <h3 className='experience-institution'>
                  Purdue University, Global
                </h3>
              </div>
              <p className='experience-position'>
                Master of Business and Administration
              </p>
              <p className='experience-date'>Ongoing</p>
            </div>
            <div className='experience-card'>
              <div className='experience-header'>
                <img src={eduIcon} className='experience-icon' />
                <h3 className='experience-institution'>
                  Colorado State University, Global
                </h3>
              </div>
              <p className='experience-position'>
                Bachelor of Science - Computer Science
              </p>
              <p className='experience-date'>January 2020 to January 2022</p>
            </div>
            <div className='experience-card'>
              <div className='experience-header'>
                <img src={eduIcon} className='experience-icon' />
                <h3 className='experience-institution'>
                  Shoreline Community College
                </h3>
              </div>
              <p className='experience-position'>
                Associate of Arts - General Studies
              </p>
              <p className='experience-date'>September 2018 to December 2019</p>
            </div>
            <div className='experience-card'>
              <div className='experience-header'>
                <img src={eduIcon} className='experience-icon' />
                <h3 className='experience-institution'>
                  Code Fellows Coding Bootcamp
                </h3>
              </div>
              <p className='experience-position'>
                Certificate in Advanced Software Development in Full Stack
                JavaScript
              </p>
              <p className='experience-date'>June 2017 to June 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
