import './../../App.css';
import './../../Components.css';
import './Motherboard.css';
import GPU from './../GPU/GPU.js'
import { useState } from 'react';

function Motherboard(props) 
{

  if (props.selectedMotherboardID == -1)
  {
    return;
  }
  const selectedMB = props.motherboard.find(
    x => x.id === props.selectedMotherboardID
  );

  return (
    <div className={selectedMB.brand + "MB"} >

      {Array.from({ length: selectedMB.slots }).map((_, index) => 
        <div 
          key={index} 
          className={selectedMB.brand + "MBSlot Slot"}

          onMouseEnter={() => props.setIsSlotHovered(true)} //fix hovera
          onMouseLeave={() => props.setIsSlotHovered(false)}//fix hovera

          onClick={(e) => {
            e.stopPropagation();
            props.showShelf("GPU", index);
        }}>
          {props.selectedGPUsID[index] != -1 ? 
          <GPU
            selectedGPUs = {props.selectedGPUs}
            GPU = {props.GPU}
            showShelf = {props.showShelf}
            index = {index}
            selectedGPUsID = {props.selectedGPUsID}
            calculateIncome={props.calculateIncome}
            changeComponent={props.changeComponent}
            
          ></GPU>
          : 
          <div className="visual">
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
          </div> }
          
        </div>
      )}
    </div>
  );
}

export default Motherboard;
