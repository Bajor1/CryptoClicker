import './../../App.css';
import './../../Components.css';
import './PowerSupply.css';
import { useState } from 'react';

function PowerSupply(props) {
  if (props.selectedPowerSupplyID == -1)
  {
    return;
  }
  const selectedPS = props.powerSupply.find(
    x => x.id === props.selectedPowerSupplyID
  );

  return (
    <div className={selectedPS.brand + "PS PS"}>
      <span className={selectedPS.brand + "Brand"}>{selectedPS.brand}<br></br></span>
      <span className={selectedPS.brand + "Name"}>{selectedPS.name}<br></br></span>
      <span className={selectedPS.brand + "Power"}>{selectedPS.powerOutput}<br></br></span>
    </div>
  );
}

export default PowerSupply;
