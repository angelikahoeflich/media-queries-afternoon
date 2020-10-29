import React from 'react';
import logo from '../Pictures/navbar-logo.svg';


function Header(){
  return(

    <header className="nav-bar">
          <div className="logo-menu">
          <a href="http://localhost:3003"><img className='img-svg' src={logo}/></a>
          <button className="hidden-btn">Menu &#9776;</button>
          </div>
          <ul className="list">
            <li className="list-item">SERVICES</li>
            <li className="list-item">PORTFOLIO</li>
            <li className="list-item">ABOUT</li>
            <li className="list-item">TEAM</li>
            <li className="list-item">CONTACT</li>
  
          </ul>
        </header>
  )
}
export default Header;