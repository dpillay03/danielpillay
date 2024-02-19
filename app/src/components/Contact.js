import emailjs from 'emailjs-com';
import { useState } from 'react';
const Contact = () => {
  const [mailData, setMailData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    // e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          'service_nso1toa', // service id
          'template_v9xo62r', // template id
          mailData,
          'user_qpeApkWFojidLurhk1udM' // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: '', email: '', message: '', subject: '' });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id='contactus'
      data-nav-tooltip='Contact Me'
      className='pp-section pp-scrollable section dark-bg'
    >
      <div className='container'>
        <div className='title'>
          <h3>Get in touch.</h3>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-xl-4 m-15px-tb'>
            <div className='contact-info'>
              <h4>What’s your story? Get in touch</h4>
              <p>
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>
              <ul>
                <li className='media'>
                  <i className='ti-map' />
                  <span className='media-body'>Seattle, Washington</span>
                </li>
                <li className='media'>
                  <i className='ti-email' />
                  <span className='media-body'>dpillay03@gmail.com</span>
                </li>
                <li className='media'>
                  <i className='ti-mobile' />
                  <span className='media-body'>425-921-04</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-7 col-xl-8 m-15px-tb'>
            <div className='contact-form'>
              <h4>Say Something</h4>
              <form id='contact-form' onSubmit={(e) => onSubmit(e)}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        name='name'
                        onChange={(e) => onChange(e)}
                        value={name}
                        id='name'
                        placeholder='Name *'
                        className={`form-control ${
                          error ? (!name ? 'invalid' : '') : ''
                        }`}
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        name='email'
                        onChange={(e) => onChange(e)}
                        value={email}
                        id='email'
                        placeholder='Email *'
                        className={`form-control ${
                          error ? (!email ? 'invalid' : '') : ''
                        }`}
                        type='email'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <input
                        name='subject'
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id='subject'
                        placeholder='Subject *'
                        className={`form-control ${
                          error ? (!subject ? 'invalid' : '') : ''
                        }`}
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <textarea
                        name='message'
                        onChange={(e) => onChange(e)}
                        value={message}
                        id='message'
                        placeholder='Your message *'
                        rows={5}
                        className={`form-control ${
                          error ? (!message ? 'invalid' : '') : ''
                        }`}
                      />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='send'>
                      {/* <button
                        onSubmit={(e) => onSubmit(e)}
                        className="px-btn px-btn-theme"
                        type="button"
                        value="Send"
                      >
                        {" "}
                        send message
                      </button> */}
                      <input
                        className='px-btn px-btn-theme'
                        type='submit'
                        value='send message'
                      />
                    </div>
                    <span
                      id='suce_message'
                      className='text-success'
                      style={{
                        display:
                          error !== null ? (!error ? 'block' : 'none') : 'none',
                      }}
                    >
                      Message Sent Successfully
                    </span>
                    <span
                      id='err_message'
                      className='text-danger'
                      style={{ display: 'none' }}
                    >
                      Message Failed
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-12'>
            <div className='google-map'>
              <div className='embed-responsive embed-responsive-21by9'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172139.09088783417!2d-122.3420644!3d47.613042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1704058344993!5m2!1sen!2sus'
                  allowFullScreen=''
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
