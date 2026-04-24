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
          )) : selectedShelfStash=="powerSupply" ? 
          props.powerSupply
          .filter(x => props.stashedPowerSupplies.includes(x.id))
            .map(item => (
            <div className="componentItem" onClick={() => props.changeComponent("powerSupply", item.id, props.selectedPowerSupplyID, 0)}>
              <div className="stickyNote">
                <div className="stickyNoteInside">
                  <h3>{item.name}</h3>
                  <h4>{item.brand}</h4>
                  <h5>Power output: {item.powerOutput}</h5>
                  <h5>Generated Heat: {item.generatedHeat}</h5>
                </div>
                <div className="visual">
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                </div>
              </div>
            </div>
          )) : selectedShelfStash == "GPU" ? props.GPU
          .filter(x => props.stashedGPUs.includes(x.id))
            .map(item => (
            <div className="componentItem" onClick={() => props.changeComponent("GPU", item.id, props.selectedGPUID, props.selectedShelfIndex)}>
              <div className="stickyNote">
                <div className="stickyNoteInside">
                  <h3>{item.name}</h3>
                  <h4>{item.brand}</h4>
                  <h5 className="GPUText">Required Power: {item.powerCost} W</h5>
                  <h5 className="GPUText">Optimal Temperature: {item.optimalHeat} °C</h5>
                  <h5 className="GPUText">Generated Temperature: {item.generatedHeat} °C</h5>
                  <h5 className="GPUText">Computing Power: {item.computingPower}</h5>
                </div>
                <div className="visual">
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                </div>
              </div>
            </div>)) : selectedShelfStash == "cooling" ? props.cooling
          .filter(x => props.stashedCoolings.includes(x.id))
            .map(item => (
            <div className="componentItem" onClick={() => props.changeComponent("cooling", item.id, props.selectedCoolingID, props.selectedShelfIndex)}>
              <div className="stickyNote">
                <div className="stickyNoteInside">
                  <h3>{item.name}</h3>
                  <h4>{item.brand}</h4>
                  <h5>Cooling: {item.cooling} °C</h5>
                  <h5>Power cost: {item.powerCost} W</h5>
                </div>
                <div className="visual">
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                  <div className="effectApplier"></div>
                </div>
              </div>
            </div>)) : ""}
      </div>
    </div>
  );
}

export default ComponentsShelf;
