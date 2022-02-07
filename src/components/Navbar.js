import React from 'react';
import logo from '../images/S1-logo.png';
import {Link} from 'react-scroll';
//  REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
  
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container">
          
            <div className=" order-0 order-md-4 position-absolute main-logo ">
                <Link className="mx-auto"  href="#">
                    <img src={logo} alt="logo" className="logo"  />
                </Link>
            </div>

          <Link className="navbar-brand" href="#">     </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "fff"}}/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link smooth={true} to="home"  className="nav-link" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="projects"  className="nav-link" href="#">Project</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contacts" offset={-50} className="nav-link" href="#">Contact</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>

  )
}

export default Navbar
