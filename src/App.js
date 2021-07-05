import logo from './logo.png';
import './App.css';
import Garden from './components/Garden';

function App() {
  return (
    <div className="App">
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

      <Garden />
    </div>
  );
}

export default App;
