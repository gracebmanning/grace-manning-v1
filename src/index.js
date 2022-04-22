import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FortuneTeller from "./components/FortuneTeller/fortuneteller";
import {HashRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/fortune-teller" element={<FortuneTeller/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);