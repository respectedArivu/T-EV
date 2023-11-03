import React from 'react';
import './App.css';
import bg from "./bg.mp4";
import logo from './logo.mp4';

const hp = () => {
  return (
    <div className="container-fluid p-0">
      <div className="video-container position-absolute top-0 start-0">
        <video autoPlay loop muted className="w-10 h-auto">
          <source src={logo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="row">
        <div className="col-12 p-0">
          <div className="position-relative">
            <video autoPlay loop muted className="w-100 h-100">
              <source src={bg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h1>
              <span>T</span>
              <span>V</span>
              <span>A</span>
              <span>R</span>
              <span>I</span>
              <span>T</span>
              <span>-</span>
              <span>E</span>
              <span>V</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hp;
