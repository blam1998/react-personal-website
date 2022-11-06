import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './user';
import Project from './Project';
import reportWebVitals from './reportWebVitals';
import About from './About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Router>
        <div className = "userIntro">
          <User ClassName = {"Navigation-Bar"}/>
        </div>
        <Routes>
          <Route exact path = '/Projects' element = {<Project/>} />
          <Route exact path = '/' element = {<About/>} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
