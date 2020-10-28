import React, {Component} from 'react';
import logo from './Pictures/navbar-logo.svg'
import './App.css';

class Header extends Component{
  constructor(){
    super()
    
    this.state = {

    }
  }

render(){
  return (
    <header>
      <div className="header-container">
      <nav>
        
      <img className="logo" src={logo} alt='logo'/>
            <ul className='nav-list'>
              <li className="nav-item">Services</li>
              <li className="nav-item">Portfolio</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Team</li>
              <li className="nav-item">Contact</li>
            </ul>
        </nav>
      </div>

  </header>
  );
}};

export default Header;
