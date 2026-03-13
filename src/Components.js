import logo from './logo.svg';
import './App.css';
import './Components.css';
import FallingElement from './FallingElement.js'
import { useState, useRef, useEffect } from "react";

function Components() {

  return (
    <div className="Components">
      <div className="case">
        <FallingElement props={"caseCover"}/>
        <FallingElement props={"screw"}/>
        <FallingElement props={"screw"}/>
        <FallingElement props={"screw"}/>
        <FallingElement props={"screw"}/>
      </div>
    </div>
  );
}

export default Components;
