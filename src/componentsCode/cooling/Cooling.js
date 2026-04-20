import './../../App.css';
import './../../Components.css';
import './Cooling.css';
import { useState } from 'react';

function Cooling(props) {
  if (props.selectedCoolingID == -1)
  {
    return;
  }
  const selectedC = props.cooling.find(
    x => x.id === props.selectedCoolingID
  );

  return (
    <div className={selectedC.brand + "C C"} title={selectedC.brand + " " + selectedC.name}>

    </div>
  );
}

export default Cooling;
