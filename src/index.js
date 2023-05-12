import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FortuneTeller from "./components/FortuneTeller/fortuneteller";
import GBMStudio from './components/GBMStudio/gbmstudio';
import Research from './components/Research/research';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/fortune-teller" element={<FortuneTeller/>}/>
        <Route path="/gbm-studio" element={<GBMStudio/>}/>
        <Route path="/undergrad-research" element={<Research/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);