import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import Youtube from './Youtube.jsx';

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com/',
    target: '_blank',
  },
  children: 'Click to visit Google',
};

const AnoterElement = (
  <a href='https://www.google.com/' target='_blank'>
    Visit Google
  </a>
);

const ProperReactElement = React.createElement(
  reactElement.type,
  reactElement.props,
  reactElement.children
);

function MyApp() {
  return (
    <div>
      <h1>My custom APPP BITCH</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
