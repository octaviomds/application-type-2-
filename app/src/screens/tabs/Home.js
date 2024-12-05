import React from 'react';

import Home_v1 from './versions/_v1';
import Home_v2 from './versions/_v2';

const Home = () => {
  const version = 1;

  const renderContent = () => {
    if (version === 1) {
      return <Home_v1 />;
    }
    if (version === 2) {
      return <Home_v2 />;
    }
  };

  return renderContent();
};

export default Home;
