import React from 'react';
import './ClubSelect.css';


function ClubSelect({ label, options }) {
  return (
    <div>
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
    // <option value=""></option>
    // <option value="TaylorMade">TaylorMade</option>
    // <option value="Titleist">Titleist</option>
    // <option value="Callaway">Callaway</option>
    // <option value="Ping">Ping</option>

    // <option value=""></option>
    //   <option value="TaylorMade">TaylorMade</option>
    //   <option value="Titleist">Titleist</option>
    //   <option value="Callaway">Callaway</option>
    //   <option value="Ping">Ping</option>