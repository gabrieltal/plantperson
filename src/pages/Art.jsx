import Image from '../components/Image';
import { ARTPIECES } from '../data/art';

export default function Art() {
  return (
    <div>
      <main>
        {
          ARTPIECES.map((data) => {
            return <Image url={data.url} title={data.title} />;
          })
        }
      </main>
    </div>
  );
};
