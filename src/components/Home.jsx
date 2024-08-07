import React from 'react';
import chess from '../assets/images/chess.svg';
import depop from '../assets/images/depop.svg';
import github from '../assets/images/github.svg';
import goodreads from '../assets/images/goodreads.svg';
import instagram from '../assets/images/instagram.svg';
import letterboxd from '../assets/images/letterboxd.svg';
import linkedin from '../assets/images/linkedin.svg';
import spotify from '../assets/images/spotify.svg';
import youtube from '../assets/images/youtube.svg';

export default class Home extends React.Component {
  render() {
    return (
      <div className="App-main">
        <main>
          <h1>Gabriel Talavera</h1>
          <p>
            Hello. My name is Gabriel and I am a software engineer.
            Here I am, on the internet! I've traveled a great distance to get here.
            I love to code and when I'm not coding I enjoy writing, painting, watching movies, thrifting and taking care of my pets and plants.
          </p>
        </main>
        <footer>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="d-flex align-items-center">
              <a className="mx-2 email no-underline" href="mailto:oldgrandpagabriel@gmail.com" target="_blank" rel="noopener noreferrer"><span className="email-icon">🕵🏻</span><span className="sr-only">Email</span></a>
              <a className="mx-2" href="https://www.github.com/gabrieltal" target="_blank" rel="noopener noreferrer"><img alt="github" src={github} /><span className="sr-only">Github</span></a>
              <a className="mx-2" href="https://www.linkedin.com/in/gvtalavera/" target="_blank" rel="noopener noreferrer"><img alt="linkedin" src={linkedin}/><span className="sr-only">LinkedIn</span></a>
              <a className="mx-2" href="https://boxd.it/3kULv" target="_blank" rel="noopener noreferrer"><img alt="letterboxd" src={letterboxd} /><span className="sr-only">Letterboxd</span></a>
              <a className="mx-2" href="https://www.goodreads.com/grandpagabriel" target="_blank" rel="noopener noreferrer"><img alt="goodreads" src={goodreads} /><span className="sr-only">Good Reads</span></a>
              <a className="mx-2" href="https://open.spotify.com/user/nano_egg?si=70OCbiv_R62yYdAPDpfZyQ" target="_blank" rel="noopener noreferrer"><img alt="spotify" src={spotify}/><span className="sr-only">Spotify</span></a>
              <a className="mx-2" href="https://chess.com/member/plant_person" target="_blank" rel="noopener noreferrer"><img alt="chess" src={chess}/><span className="sr-only">Chess</span></a>
              <a className="mx-2" href="https://www.youtube.com/channel/UCKRJ1N_6m16aQEqviKk5Hxw" target="_blank" rel="noopener noreferrer"><img alt="youtube" src={youtube}/><span className="sr-only">Youtube</span></a>
              <a className="mx-2" href="https://www.instagram.com/brownwoolpants" target="_blank" rel="noopener noreferrer"><img alt="instagram" src={instagram}/><span className="sr-only">Instagram</span></a>
              <a className="mx-2" href="https://www.depop.com/oldgrandpagabriel/" target="_blank" rel="noopener noreferrer"><img alt="depop" src={depop}/><span className="sr-only">Depop</span></a>
            </div>
          </div>
        </footer>
      </div>
    );
  };
};
