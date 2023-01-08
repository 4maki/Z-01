import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));   //react kreira svoj virutalni dom u kojem je objekt sa dvi instance 'istog'DOM-a,tj kad naide na razliku onda je primjeni
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

