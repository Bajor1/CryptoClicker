import './../../App.css';
import './../../Components.css';
import './Motherboard.css';
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
