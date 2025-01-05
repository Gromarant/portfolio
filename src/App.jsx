import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import Main from './layout/Main.jsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Main/>
  </HashRouter>
)