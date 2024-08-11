import React from 'react';
import Image from '../components/Image';

const DATA = [
  {
    title: 'Never ending sadness',
    url: 'https://avatars.githubusercontent.com/u/20470949?v=4',
  },
];

export default class Art extends React.Component {
  render() {
    const arts = DATA.map((data) => {
      return <Image url={data.url} title={data.title} />;
    });

    return (
      <div>
        <main>
          {arts}
        </main>
      </div>
    );
  };
};
