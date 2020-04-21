import React from 'react';
import './ClubOptions.css';

function ClubOptions({ setBagState }) {

  function handleCange(event) {
    return setBagState(event.target.name, event.target.value);
  }

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
      <div className="woodsContainer">

      </div>
    </div>
  )
};

export default ClubOptions;