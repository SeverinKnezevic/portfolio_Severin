import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import {set, useForm} from 'react-hook-form';



const Contacts = () => {

  const Result = () => {
    return (
      <span><i>Form sent successfully!</i> </span>
    )
  }

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ID", "template_ID", e.target, "user_ZSmVBLO7vuIS8oRwcL7Zv")
      .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };



  return (
    <div id="contacts" className='contacts'>
      <div className="text-center">
        <h1>Contact Me</h1>
        <p> Please fill out the form and I'll contact you as soon as possible.</p>
        <span className="success-message"> {result ? <Result /> : null} </span>
      </div>
      
      <div className="container">

        <form onSubmit={sendEmail} autoComplete="off">

          <div className="row">
            <div className="col-md-6 col-xs-12">

              {/* INPUT NAME */}
              <div>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
              </div>

              <span className="error-message">
                {/* { errors.name && errors.name.message } */}
                
              </span>

              {/* INPUT EMAIL */}
              <input
                id="email"
                type="email"
                className='form-control'
                placeholder='Email'
                name='email'
                required
              />

              {/* SUBJECT EMAIL */}
              <input
                id="subject"
                type="text"
                className='form-control'
                placeholder='Subject'
                name='subject'
                required
              />
            </div>
              {/* <span className="error-message">
                {errors.subject && errors.subject.message}
              </span> */}

              {/* MESSAGE */}
            <div className="col-md-6 col-xs-12">
              <textarea
                  id="message"
                  type="text"
                  className='form-control'
                  placeholder='Message'
                  name='message'
                  required
              ></textarea>
              {/* <span className="error-message">
                {errors.message && errors.message.message}
              </span> */}
              <button className='btn-main-offer contact-btn' type="submit"> CONTACT ME</button>
            </div>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Contacts
