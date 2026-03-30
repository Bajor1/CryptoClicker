import logo from './logo.svg';
import './App.css';
import './Components.css';
import FallingElement from './FallingElement.js'
import ComponentsShelf from './ComponentsShelf.js'

import NicornMB from './componentsCode/motherboard/NicornMB.js'

import { useState, useRef, useEffect } from "react";

function Components(props) {
  const [screwsUnscrewed, setScrewsUnscewed] = useState(0);
  const [secretCounter, setSecretCounter] = useState(0);

  function IncrementUnscrewedScrews()
  {
    setScrewsUnscewed(screwsUnscrewed + 1);
  }

  function IncrementSecretCounter()
  {
    setSecretCounter(secretCounter + 1);
  }

  const selectedMotherboard = props.motherboard.find(item => item.id == props.selectedMotherboardID)

  const [hideShelf, setHideShelf] = useState(true);
  const [selectedShelfStash, setSelectedShelfStash] = useState();

  function showShelf(component)
  {
    console.log("a");
    setHideShelf(prev => !prev);
    setSelectedShelfStash(component);
  }

  return (
    <div className="Components">
      <div className="case">
        {screwsUnscrewed >=4 ? <FallingElement props={["caseCover", IncrementSecretCounter]}/> : <div className="caseCover" style={{ transform: `translateX(-15px) translateY(-20px)` }}></div>}
        <FallingElement props={["screw", IncrementUnscrewedScrews]}/>
        <FallingElement props={["screw", IncrementUnscrewedScrews]}/>
        <FallingElement props={["screw", IncrementUnscrewedScrews]}/>
        <FallingElement props={["screw", IncrementUnscrewedScrews]}/>
        
        <div className="motherboardInput" onClick={() => showShelf("motherboard")}>

          {selectedMotherboard.brand == "AsBoulder" ? <NicornMB props={props} selectedMotherboard={selectedMotherboard}></NicornMB> : ""}
          {selectedMotherboard.brand == "好主板" ? <NicornMB props={props} selectedMotherboard={selectedMotherboard}></NicornMB> : ""}
          {selectedMotherboard.brand == "MegaByte" ? <NicornMB props={props} selectedMotherboard={selectedMotherboard}></NicornMB> : ""}
          {selectedMotherboard.brand == "Nicorn" ? <NicornMB props={props} selectedMotherboard={selectedMotherboard}></NicornMB> : ""}
          {selectedMotherboard.brand == "NSI" ? <NicornMB props={props} selectedMotherboard={selectedMotherboard}></NicornMB> : ""}
          <div className="visual">
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
          </div>
        </div>

        <div className="powerSupplyInput">
          <div className="visual">
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
          </div>
        </div>

        <div className="fansInput">
          <div className="visual">
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
          </div>
        </div>
      </div>

      {//półka na komponenty, zawartosc zalezna od wyslanej tablicy
      }
      <ComponentsShelf 
        hide={hideShelf} 



        stashedCoolings={props.stashedCoolings} 
        stashedPowerSupplies={props.stashedPowerSupplies} 
        stashedGPUs={props.stashedGPUs}
        stashedMotherboards={props.stashedMotherboards}

        selectedShelfStash={selectedShelfStash}

        //stale wartosci
        cooling={props.cooling}
        powerSupply={props.powerSupply}
        GPU={props.GPU}
        motherboard={props.motherboard}
        />

      {/*easter egg:*/}
      <div className='counterOutline' style={{
    transform: secretCounter > 1 ? "translateY(0px)" : "translateY(-200px)"
  }}>
        <div className='counterInside'> 
          <div className="glitchText">
            {secretCounter < 10
              ? "000" + secretCounter
              : secretCounter < 100
                ? "00" + secretCounter
                : secretCounter < 1000
                  ? "0" + secretCounter
                  : secretCounter
            }
          </div>
          <div className="counterOverlay">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Components;
