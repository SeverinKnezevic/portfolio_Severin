import React from 'react';
import author from '../images/me.jpg';

const AboutMe = () => {
  return (
    <div className='container py-5'>
        <div className="row">
            <div className="col-lg-6 col-mx-12">
                <div className="photo-wrap mb-5">
                    <img className='profile-img' src={author} alt="author.."/>
                </div>
            </div>
            <div className="col-lg-6 col-mx-12">
                <h1 className='about-heading'>About me</h1>
                <h5>SEVERIN KNEŽEVIĆ</h5>
                <p>
                    text o autoru..
                </p>
            </div>

        </div>
      
    </div>
  )
}

export default AboutMe
