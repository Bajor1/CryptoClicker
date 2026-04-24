import './../../App.css';
import './../../Components.css';
import './GPU.css';
import { useState } from 'react';

function GPU(props) {

    const imgclass = [
        "GT1030", //0
        "CompressioGePowerGTX", //1
        "CompressioGePowerGTX", //2
        "MegaByteGePowerGTX", //3
        "AcwerGePowerGTX", //4
        "CompressioGePowerGTX", //5
        "AXDRadeoff", //6
        "CompressioGePowerRTX", //7
        "HellForgedGeVilPowerRTX", //8
        "MegaByteGePowerRTX", //9
        "CompressioGePowerRTX", //10
        "CompressioGePowerRTX", //11
        "AcwerGePowerRTX", //12
        "CompressioGePowerRTX", //13
        "HellForgedGeVilPowerRTX", //14
        "HellForgedGeVilPowerRTX", //15
        "NicornGePowerRTX",//16
        "CompressioGePowerRTX", //17
        "HellForgedGeVilPowerRTX", //18
        "MegaByteGePowerRTX", //19
        "unsignedBigBoy", //20
        "unsignedSmallBoy"]; //21

  if (props.selectedGPUsID[props.index] == -1)
  {
    return;
  }
  console.log(props.selectedGPUsID[props.index]);
  const selectedGPU = props.GPU.find(
    x => x.id === props.selectedGPUsID[props.index]
  );

  return (
    <div className={imgclass[selectedGPU.id]+" GPU interactableComponent"} title={selectedGPU.name+" "+selectedGPU.id}>
      <div className="visual">
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
      </div>
      <div className="deleteButton" onClick={() => {
            props.showShelf("", 0);
            props.changeComponent("GPU", -1, selectedGPU.id, props.index);
          }}>
            <div className="visual" style={{ marginTop: "-0%" }}>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
              <div className="effectApplier"></div>
            </div>
          </div>
    </div>
  );
}

export default GPU;
