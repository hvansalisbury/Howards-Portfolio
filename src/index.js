// importing the react tools we need to render the page
import React from 'react';
import ReactDOM from 'react-dom';
// importing our app.js file that handles our states
import App from './App';
// importin bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// react rendering function our app.js file to the div with the root id
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);