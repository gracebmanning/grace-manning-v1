import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FortuneTeller from "./components/FortuneTeller/fortuneteller";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/fortune-teller" element={<FortuneTeller/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);