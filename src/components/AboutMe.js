import React from 'react';
import author from '../images/me.jpg';

const AboutMe = () => {
  return (
    <div id="about" className='container py-5  aboutme'>
        <div className="row" >
            <div className="col-lg-6 col-mx-12">
                <div className="photo-wrap mb-5">
                    <img className='profile-img' src={author} alt="author.."/>
                </div>
            </div>
            <div className="col-lg-6 col-mx-12">
                <br />
                <h1 className='about-heading'>About me</h1>
                <hr />
                <br />
                <div>
                <h5>SEVERIN KNEŽEVIĆ</h5>
                <small className='professi'><i>Master in Computer Science</i></small>
                <br />
                <br />
                </div>
                <p>
                    My name is Severin. Originall hailing from the Croatia but I living in Bosnia and Herzegovina.
                </p>
                <p>
                    I completed my Computer science studies at the University of Mostar.
                </p>
                <p>
                    During my studies I became acquainted with various tehnologies and development programs.
                </p>
                <p>
                    Contact me for more information!
                </p>
            </div>

        </div>
      
    </div>
  )
}

export default AboutMe
