import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IntervalCounter from './IntervalCounter';
import ResourceButtons from './ResourceButtons';
import FoxPictures from './FoxPictures';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FoxPictures />
  </React.StrictMode>
);
