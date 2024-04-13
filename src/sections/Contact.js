import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formInputs, setFormInputs] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_nso1toa',
        'template_v9xo62r',
        formInputs,
        'user_qpeApkWFojidLurhk1udM'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Handle success scenario (e.g., showing a success message)
        },
        (error) => {
          console.log(error.text);
          // Handle error scenario (e.g., showing an error message)
        }
      );

    // Clear form fields after submission
    setFormInputs({
      user_name: '',
      user_email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className='contact-container'>
      <h1 className='section-headers'>Contact</h1>
      <hr className='section-header-hr'></hr>
      <form className='contact-form' onSubmit={sendEmail}>
        <div className='contact-form-top'>
          <input
            type='text'
            name='user_name'
            placeholder='Name'
            value={formInputs.user_name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='user_email'
            placeholder='Email'
            value={formInputs.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          value={formInputs.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Body'
          value={formInputs.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className='button primary' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
