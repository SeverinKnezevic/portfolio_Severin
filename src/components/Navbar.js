import React from 'react'
import logo from '../images/S1-logo.png'
//  REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
          
            <div className=" order-0 order-md-4 position-absolute main-logo ">
                <a className="mx-auto"  href="#">
                    <img src={logo} alt="logo" className="logo"  />
                </a>
            </div>

          <a className="navbar-brand" href="#">     </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "fff"}}/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>

    </div>
  )
}

export default Navbar
