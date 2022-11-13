import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoginPage from './components/loginPage/loginPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' exact element={<App/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

