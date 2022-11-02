import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './user';
import HorizontalSlider from './HorizontalSlider';
import reportWebVitals from './reportWebVitals';
import {InprogressStorage, CompletedStorage} from './ItemFactory'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div className = "userIntro">
        <User ClassName = {"Resume"}/>
      </div>
      <div className = "Horizontal-Slider">
        <div className = "Horizontal-Slider-Title">
          What I'm Working On
        </div>
        <HorizontalSlider ItemBoxArray = {InprogressStorage}/>
      </div>
      <div className = "Horizontal-Slider">
        <div className = "Horizontal-Slider-Title">
          Projects I've Done
        </div>
        <HorizontalSlider ItemBoxArray = {CompletedStorage}/>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
