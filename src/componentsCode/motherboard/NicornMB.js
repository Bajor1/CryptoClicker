import './../../App.css';
import './../../Components.css';
import './Motherboard.css';
import { useState } from 'react';

function NicornMB({props, selectedMotherboard}) {

  return (
    <div className="NicornMB">
      {Array.from({length: selectedMotherboard.slots}).map((_, index) => 
        <div className="NicornMBSlot">
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

export default NicornMB;
