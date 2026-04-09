import './App.css';
import './Components.css';
import './ComponentsShelf.css';
import { useState, useRef, useEffect } from "react";

function ComponentsShelf(props) {
  
  const selectedShelfStash = props.selectedShelfStash; //wybor komponentu

  const stashedMotherboards = props.stashedMotherboards;

  return (
    <div className={props.hide ? "hideShelf ComponentsShelf" : "ComponentsShelf"}>
      <div className="shelfEnd"></div>
      <div className="componentsList">
      {selectedShelfStash}
      {selectedShelfStash=="motherboard" ? 
        props.motherboard
          .filter(x => props.stashedMotherboards.includes(x.id))
            .map(item => (
            <div className="componentItem" onClick={() => props.changeComponent("motherboard", item.id, props.selectedMotherboardID, 0)}>
              <div className="stickyNote">
                <div className="stickyNoteInside">
                  <h3>{item.name}</h3>
                  <h4>{item.brand}</h4>
                  <h5>Slots: {item.slots}</h5>
                  <h5>Chipset: {item.chipset}</h5>
                </div>
                <div className="visual">
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                </div>
              </div>
            </div>
          )) : " "}
      </div>
    </div>
  );
}

export default ComponentsShelf;
