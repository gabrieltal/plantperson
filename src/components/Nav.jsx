import { useState } from 'react';
import logo from '../assets/images/logo.png';
import logoExpanded from '../assets/images/plantperson-expanded.png';

export default function Nav() {
  const [status, setStatus] = useState('normal');

  function classByStatus(currentStatus) {
    if (status !== undefined && currentStatus === status) {
      return '';
    } else {
      return 'display-none';
    }
  }

  return (
    <header className="margin-y--sm margin-b--xs">
      <nav className="display-flex flex-column align-items-center">
        <a href="/" id="logo" onMouseEnter={() => setStatus('expanded')} onMouseLeave={() =>  setStatus('normal')}>
          <span className={'default ' + classByStatus('normal')}><img src={logo} className="App-logo" alt="logo" height="80px" width="50px"/></span>
          <span className={'expanded ' + classByStatus('expanded')}><img src={logoExpanded} height="80px" width="50px" alt="cute little plant person logo" /></span>
          <span className="screen-reader-only">Home</span>
        </a>
      </nav>
    </header>
  );
};
