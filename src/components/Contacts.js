import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import {useForm} from 'react-hook-form';

const Contacts = () => {

  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID" ;
  const userID = "user_ZSmVBLO7vuIS8oRwcL7Zv";

 
  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully!");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contacts" className='contacts'>
      <div className="text-center">
        <h1>Contact Me</h1>
        <p> Please fill out the form and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      
      <div className="container">

        <form onSubmit={handleSubmit(onSubmit)}>

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
                  // ref={
                  //   register({
                  //     required: "Please enter your name",
                  //     maxLength: {
                  //       value: 20,
                  //       mess: "Please enter a name with fewer  than 20 characters"
                  //     }
                  //   })
                  // }
              />
              </div>
              <span className="error-message">
                { errors.name && errors.name.message }
              </span>

              {/* INPUT EMAIL */}
              <input
                id="email"
                type="email"
                className='form-control'
                placeholder='Email'
                name='email'
                // ref={
                //   register({
                //     required: "Please provide you email.",
                //     pattern: {
                //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //       message: "invalid Email"
                //     }
                //   })}
              />
                {/* <span className="error-message">
                {errors.email && errors.email.message}
                </span> */}

              {/* SUBJECT EMAIL */}
              <input
                id="subject"
                type="text"
                className='form-control'
                placeholder='Subject'
                name='subject'
                // ref={
                //   register({
                //     required: "OOPS, you forget to add the subject.",
                //   })
                // }
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
                    // ref={
                    //   register({
                    //     required: "Please message...",
                    //   })
                    // }
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
