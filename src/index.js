import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './user';
import HorizontalSlider from './HorizontalSlider'
import ItemBox, {project1} from "./ItemBox"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div className = "userIntro">
        <User/>
      </div>
      <div className = "in-progress-slider">
        <ItemBox ProjectName = {project1.ProjectName} Date = {project1.Date} Summary = {project1.Summary} ShortDescription = {project1.ShortDescription} />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
