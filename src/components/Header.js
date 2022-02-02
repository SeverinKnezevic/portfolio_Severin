import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wraper">
       <div className="main-info">
           <h1> Hello, </h1>
           <h1>My Name is</h1>

           <Typed className="typed-text"
                strings={[
                'SEVERIN KNEŽEVIĆ',
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop 
            />
            
            <a href='#' className='btn-main-offer' > Hire me </a>
            
     
        </div> 
    
    </div>
    
  )
}

export default Header
