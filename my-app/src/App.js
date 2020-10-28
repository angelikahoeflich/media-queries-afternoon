import React, {Component} from 'react';
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
        
      <img className="logo" alt=''/>
      
            <ul className='nav-list'>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
        </nav>
      </div>
    </header>
  );
}};

export default Header;
