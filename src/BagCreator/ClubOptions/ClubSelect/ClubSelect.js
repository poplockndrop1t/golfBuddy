import React from 'react';
import './ClubSelect.css';


function ClubSelect({ label, options }) {
  return (
    <div className="clubSelectContainer">
      <label>{label}</label>
      <select name={label} >
        { options.map((option, key) => {
          return (
            <option value={option} key={key}>{option}</option>
          )
        })}
      </select>
    </div>
  )
};

export default ClubSelect;