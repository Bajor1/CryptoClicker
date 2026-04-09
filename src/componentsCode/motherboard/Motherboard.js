import './../../App.css';
import './../../Components.css';
import './Motherboard.css';
import { useState } from 'react';

function Motherboard(props) {

  const selectedMB = props.motherboard.find(
    x => x.id === props.selectedMotherboardID
  );

  return (
    <div className={selectedMB.brand + "MB"}>

      {Array.from({ length: selectedMB.slots }).map((_, index) => 
        <div key={index} className={selectedMB.brand + "MBSlot Slot"}>
          <div className="visual">
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
            <div className="effectApplier"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Motherboard;
