import logo from './logo.png';
import './App.css';

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
          </div>
        </nav>
      </header>

      <main className="App-main">
        <div className="App-main-content">
          <h1>Gabriel Talavera</h1>
          <p>
            Hello! This website is a work in progress. For my personal website checkout
            <a className="App-link" href="https://brownwoolpants.com" target="_blank" rel="noopener noreferrer">
            brownwoolpants.com.
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
