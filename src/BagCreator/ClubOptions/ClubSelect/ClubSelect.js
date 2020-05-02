import React from 'react';
import './ClubSelect.css';

function ClubSelect({ clubType, options }) {
  return (
    <div className="clubSelectContainer">
      <label>{clubType}</label>
      <select name={clubType} >
        {
          options.map((option, key) => {
            return (
              <option value={option} key={key}>{option}</option>
            )
          })
        }
      </select>
    </div>
  )
};

export default ClubSelect;