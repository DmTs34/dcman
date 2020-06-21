import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js';
import "./main.css";

const title = 'My Simple Express React Webpack Babel Setup Environment';

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);


module.hot.accept();