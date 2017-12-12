import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Router, browserHistory }from 'react-router';
import './static/style/index.scss';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
