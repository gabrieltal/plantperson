import React from 'react';
import logo from '../logo.png';

export default class Nav extends React.Component {
  render() {
    return (
      <header className="App-header">
        <nav className="navbar d-flex flex-column align-items-center">
          <a href="/" id="logo">
            <span className="default"><img src={logo} className="App-logo" alt="logo" height="80px" width="50px"/></span>
            <span className="sr-only">Home</span>
          </a>

          <div className="nav-links d-flex flex-wrap align-items-center">
            <a className="App-link" href="https://github.com/gabrieltal/plantperson" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a className="App-link" href="https://brownwoolpants.com" target="_blank" rel="noopener noreferrer">
              Personal Site
            </a>
          </div>
        </nav>
      </header>
    );
  }
}
