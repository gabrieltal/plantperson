import React from 'react';
import logo from '../assets/images/logo.png';
import logoExpanded from '../assets/images/plantperson-expanded.png';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'normal' };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter() {
    this.setState(prevState => ({ status: 'expanded' }));
  }

  handleLeave() {
    this.setState(prevState => ({ status: 'normal' }));
  }

  classByStatus(status) {
    if (status === this.state.status) {
      return '';
    } else {
      return 'd-none';
    }
  }

  render() {
    return (
      <header className="App-header">
        <nav className="navbar d-flex flex-column align-items-center">
          <a href="/" id="logo" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
            <span className={'default ' + this.classByStatus('normal')}><img src={logo} className="App-logo" alt="logo" height="80px" width="50px"/></span>
            <span className={'expanded ' + this.classByStatus('expanded')}><img src={logoExpanded} height="80px" width="50px" alt="cute little plant person logo" /></span>
            <span className="sr-only">Home</span>
          </a>
        </nav>
      </header>
    );
  }
}
