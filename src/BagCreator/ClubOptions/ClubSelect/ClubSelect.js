import React from 'react';
import './ClubSelect.css';


function ClubSelect({ clubType, options }) {
  return (
    <div className="clubSelectContainer">
      <label>{clubType}</label>
      <select name={clubType} >
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

          // <label>Woods</label>
          // <select className="woods" name="type">
          //   <option value=""></option>
          //   <option value="3+">3+</option>
          //   <option value="3">3</option>
          //   <option value="4">4</option>
          //   <option value="5">5</option>
          // </select>
          // <select className="woods" name="brand">
          //   <option value=""></option>
          //   <option value="TaylorMade">TaylorMade</option>
          //   <option value="Titleist">Titleist</option>
          //   <option value="Callaway">Callaway</option>
          //   <option value="Ping">Ping</option>
          // </select>
          // <button onClick={ this.addNewClub }>Add Wood</button>