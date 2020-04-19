import React from 'react';
import './ClubOptions.css';

function ClubOptions() {

  function handleCange(event) {
    console.log(event);
  }

  return (
    <div className="bagCreatorContainer">
      <form>
        <label>Driver
          <select onChange={ handleCange }>
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
        </label>
      </form>
    </div>
  )
};

export default ClubOptions;