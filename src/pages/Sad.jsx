import Image from '../components/Image';
import Nav from '../components/Nav';
import '../assets/stylesheets/Home.css';

export default function Sad() {
  return (
    <div className="black-background display-flex flex-column justify-content-center align-items-center">
      <Nav />
      <main className="Main-content">
        <Image url='https://avatars.githubusercontent.com/u/20470949?v=4' title='Never ending sadness' />
      </main>
    </div>
  );
};
