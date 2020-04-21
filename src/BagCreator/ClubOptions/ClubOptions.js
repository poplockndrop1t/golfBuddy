import React from 'react';
import './ClubOptions.css';

var newWood = { type: '', brand: '' };

function addNewWood() {

};

function ClubOptions({ setBagState }) {
  function handleCange(event) {
    return setBagState(event.target.name, event.target.value);
  };

  function handleWoodsChange(event) {
    console.log(event.target.name, event.target.value);
  };

  return (
    <div className="bagCreatorContainer">
      <div className="driverContainer">
        <label>Driver
          <select name="driver" onChange={ handleCange }>
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
        </label>
      </div>
      <div className="woodsContainer" onChange={ handleWoodsChange }>
        <select name="woods" >
          <option value="3+">3+</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select name="woods" >
          <option value="TaylorMade">TaylorMade</option>
          <option value="Titleist">Titleist</option>
          <option value="Callaway">Callaway</option>
          <option value="Ping">Ping</option>
        </select>
        <button onClick={ addNewWood }>Add Wood</button>
      </div>
    </div>
  )
};

export default ClubOptions;