import Nav from '../components/Nav';
import InternetLink from '../components/InternetLink';

import chess from '../assets/images/chess.svg';
import depop from '../assets/images/depop.svg';
import github from '../assets/images/github.svg';
import goodreads from '../assets/images/goodreads.svg';
import instagram from '../assets/images/instagram.svg';
import letterboxd from '../assets/images/letterboxd.svg';
import linkedin from '../assets/images/linkedin.svg';
import spotify from '../assets/images/spotify.svg';
import youtube from '../assets/images/youtube.svg';

export default function Home() {
  return (
    <div className="height-100vh display-flex flex-column align-items-center">
      <Nav />
      <main className="Main-content margin-x--sm">
        <h1>Gabriel Talavera</h1>
        <p>
          Hello. My name is Gabriel and I am a software engineer.
          Here I am, on the internet! I've traveled a great distance to get here.
          I love to code and when I'm not coding I enjoy writing, painting, watching movies, thrifting and taking care of my pets and plants.
        </p>
      </main>
      <footer>
        <div className="display-flex justify-content-center align-items-center height-100">
          <div className="display-flex align-items-center">
            <a className="margin-x--xs no-underline" href="mailto:oldgrandpagabriel@gmail.com" target="_blank" rel="noopener noreferrer"><span>🕵🏻</span><span className="screen-reader-only">Email</span></a>
            <InternetLink title="Github" image={github} href="https://www.github.com/gabrieltal" />
            <InternetLink title="LinkedIn" image={linkedin} href="https://www.linkedin.com/in/gvtalavera/" />
            <InternetLink title="Letterboxd" image={letterboxd} href="https://boxd.it/3kULv" />
            <InternetLink title="Good Reads" image={goodreads} href="https://www.goodreads.com/grandpagabriel" />
            <InternetLink title="Spotify" image={spotify} href="https://open.spotify.com/user/nano_egg?si=70OCbiv_R62yYdAPDpfZyQ" />
            <InternetLink title="Chess" image={chess} href="https://chess.com/member/plant_person" />
            <InternetLink title="Youtube" image={youtube} href="https://www.youtube.com/channel/UCKRJ1N_6m16aQEqviKk5Hxw" />
            <InternetLink title="Instagram" image={instagram} href="https://www.instagram.com/brownwoolpants" />
          </div>
        </div>
      </footer>
    </div>
  );
};
