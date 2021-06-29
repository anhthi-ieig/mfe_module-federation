import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (element, props = {}) => {
  ReactDOM.render(
      <App {...props} />,
      element,
  );
};

if (process.env.NODE_ENV === 'development') {
  const gamesRoot = document.getElementById('games-root');

  if (gamesRoot) {
    mount(gamesRoot);
  }
}

export { mount };
