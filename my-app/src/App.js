import React from 'react';
import './App.css';
import logo from './Pictures/navbar-logo.svg';

function App(){

  return (

    <div>
        <header className="nav-bar">
          <div>
          <a href="http://localhost:3003"><img className='img-svg' src={logo}/></a>
          </div>
          <ul className="list">
            <li className="list-item">SERVICES</li>
            <li className="list-item">PORTFOLIO</li>
            <li className="list-item">ABOUT</li>
            <li className="list-item">TEAM</li>
            <li className="list-item">CONTACT</li>
  
          </ul>
        </header>
        <div className="center-welcome">
          <h2 className="first-header">WELCOME TO OUR STUDIO!</h2>
          <h1 className="second-header">IT'S NICE TO MEET YOU</h1>
          <button className="welcome-btn">TELL ME MORE</button>
        </div>
    </div>
  )
}

export default App;