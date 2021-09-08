import React from 'react';
import chess from '../chess.svg';
import github from '../github.svg';
import instagram from '../instagram.svg';
import spotify from '../spotify.svg';
import stackoverflow from '../stackoverflow.svg';
import twitter from '../twitter.svg';
import youtube from '../youtube.svg';
import linkedin from '../linkedin.svg';

export default class Home extends React.Component {
  render() {
    return (
      <div className="App-main">
        <main>
          <h1>Gabriel Talavera</h1>
          <p>
            Hello. I am a software engineer. I love to code.
            I have experience working on Ruby on Rails, JavaScript, jQuery and PostGreSQL with minor experience with Vue, PHP, Laravel and React.
            Coding allows me to express myself with projects that reflect my passions and curiosities.
            Refactoring code and debugging issues give me strength.
            When I'm not coding I enjoy writing, painting, film and taking care of my pets and plants.
          </p>
        </main>
        <footer>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="d-flex align-items-center">
              <a className="mx-1 email no-underline" href="mailto:gabrielvt6@gmail.com" target="_blank" rel="noopener noreferrer"><span className="email-icon">🕵🏻</span><span className="sr-only">Email</span></a>
              <a className="mx-1 spotify" href="https://www.github.com/gabrieltal" target="_blank" rel="noopener noreferrer"><img src={github} /><span className="sr-only">Github</span></a>
              <a className="mx-1 blue-fill-hover" href="https://www.twitter.com/brownwoolpants" target="_blank" rel="noopener noreferrer"><img src={twitter}/><span className="sr-only">Twitter</span></a>
              <a className="mx-1 instagram" href="https://www.instagram.com/brownwoolpants" target="_blank" rel="noopener noreferrer"><img src={instagram}/><span className="sr-only">Instagram</span></a>
              <a className="mx-1 linkedin" href="https://chess.com/member/plant_person" target="_blank" rel="noopener noreferrer"><img src={chess}/><span className="sr-only">Chess</span></a>
              <a className="mx-1 orange-fill-hover" href="https://stackoverflow.com/users/9911698/gabriel?tab=profile" target="_blank" rel="noopener noreferrer"><img src={stackoverflow}/><span className="sr-only">StackOverflow</span></a>
              <a className="mx-1 red-fill-hover" href="https://www.youtube.com/channel/UCKRJ1N_6m16aQEqviKk5Hxw" target="_blank" rel="noopener noreferrer"><img src={youtube}/><span className="sr-only">Youtube</span></a>
              <a className="mx-1 spotify" href="https://open.spotify.com/user/nano_egg?si=70OCbiv_R62yYdAPDpfZyQ" target="_blank" rel="noopener noreferrer"><img src={spotify}/><span className="sr-only">Spotify</span></a>
              <a className="mx-1 linkedin" href="https://www.linkedin.com/in/gvtalavera/" target="_blank" rel="noopener noreferrer"><img src={linkedin}/><span className="sr-only">LinkedIn</span></a>
            </div>
          </div>
        </footer>
      </div>

    );
  };
};
