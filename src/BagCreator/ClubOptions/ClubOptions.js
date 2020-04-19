import React from 'react';
import './ClubOptions.css';

function ClubOptions() {
  return (
    <div className="bagCreatorContainer">
      <form>
        <label>Driver
          <select>
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