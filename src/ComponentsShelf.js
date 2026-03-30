import './App.css';
import './Components.css';
import './ComponentsShelf.css';
import { useState, useRef, useEffect } from "react";

function ComponentsShelf(props) {
  
  const selectedShelfStash = props.selectedShelfStash; //wybor komponentu
  

  return (
    <div className={props.hide ? "hideShelf ComponentsShelf" : "ComponentsShelf"}>
      <div className="shelfEnd"></div>
      <div className="componentsList">

        <div className="componentItem">
          <div className="stickyNote">
            <div className="stickyNoteInside">
              <h4>Karta Graficzna</h4>
              <h5>opis opis opis</h5>
            </div>
            <div className="visual">
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
            </div>
          </div>
        </div>

        <div className="componentItem">
          <div className="stickyNote">
            <div className="stickyNoteInside">
              <h4>Karta Graficzna</h4>
              <h5>opis opis opis</h5>
            </div>
            <div className="visual">
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
            </div>
          </div>
        </div>
        
        <div className="componentItem">
          <div className="stickyNote">
            <div className="stickyNoteInside">
              <h4>Karta Graficzna</h4>
              <h5>opis opis opis</h5>
            </div>
            <div className="visual">
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default ComponentsShelf;
