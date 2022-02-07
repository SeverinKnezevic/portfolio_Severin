import React from 'react';
import logo from '../images/S1-logo.png';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    
    <div className='footer'>
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
                <a href=" ">
                  <img src={logo} alt="logo" className="logo-footer"  />
                </a>
          </div>
      </div>
      <div className="container footer-down">
          <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 footer-right">
                  
                    <p className='severin'>SEVERIN KNEŽEVIĆ</p>
                    <p><small>Mobile: </small>  <a href="number"> <i>00387 63 619 978</i></a> <br />
                    <small>Adress:</small> <i>Orašje (Bosnia and Herzegovina)</i> <br />
                    <small>Email:</small> <i>knezevicseverin@gmail.com</i></p>
                  </div>
              <div className="col-lg-4 col-md-4 col-sm-4 footer-center">
                {/* <a href="">
                  <img src={logo} alt="logo" className="logo-footer"  />
                </a> */}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 footer-left">
                <div className="row">
                    <div className="col">
                        <Link smooth={true} to="home" className='footer-nav'>Home</Link>
                        <br />
                        <Link smooth={true} to="about" offset={-110} className='footer-nav'>About Me</Link>
                        <br />
                        <Link smooth={true} to="projects" className='footer-nav'>Projects</Link>
                        <br />
                        <Link smooth={true} to="contacts" offset={-50} className='footer-nav'>Contact</Link>
                    </div>
                </div>
        
              </div>
          </div>
      </div>
      <div className="row copyright footer-copyright container">
      <small> Copyright &copy; <b>SEVERIN KNEŽEVIĆ</b> 2022.</small> <br/>
                    <small>All rights reserved.</small>
      </div>
    </div>
  )
}

export default Footer
