import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FortuneTeller from "./components/FortuneTeller/fortuneteller";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/fortune-teller" element={<FortuneTeller/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);