import * as React from 'react';
import { render } from 'react-dom';
import { App } from './app/App';
import './index.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "@fortawesome/fontawesome-free/css/fontawesome.css"; 
import "@fortawesome/fontawesome-free/css/brands.css"; 
import "@fortawesome/fontawesome-free/css/solid.css"; 


render(
  <App />,
  document.getElementById('root') as HTMLElement
);