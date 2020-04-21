import React from 'react';
import './ClubOptions.css';

var newWood = { type: '', brand: '' };


function ClubOptions({ setBagState, createNewClub, newClub, setNewClubValue }) {
  function handleCange(event) {
    return setBagState(event.target.name, event.target.value);
  };

  function handleWoodsChange(event) {
    return setNewClubValue(event.target.name, event.target.value, 'woods');
  };

  function addNewWood() {
    if (newClub.type && newClub.brand) {
      return createNewClub(newClub.type, newClub.brand, 'woods');
    }
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
        <select name="type" >
          <option value="3+">3+</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select name="brand" >
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