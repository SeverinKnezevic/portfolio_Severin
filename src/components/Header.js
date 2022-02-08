import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <div id="home" className="header-wraper">
       <div className="main-info">
            <h1> Hello, </h1>
            <h1>My Name is</h1>
            <h1><Typed className="typed-text"
                strings={[
                'SEVERIN KNEZEVIC',
                ]}
                typeSpeed={100}
                backSpeed={50}
              />
            </h1>
            <Link smooth={true} to="about" offset={-110} href='#' className='btn-main-offer' > Hire me </Link>

        </div> 
    
    </div>
    
  )
}

export default Header
