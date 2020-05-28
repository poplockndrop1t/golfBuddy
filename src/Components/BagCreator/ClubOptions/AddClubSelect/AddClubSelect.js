import React from 'react';
import { formatClubTitle } from '../../../../Helpers/Helpers.js';
import './AddClubSelect.css';

function AddClubSelect({ brands, clubTypeNumbers, clubType, createNewClub, newClub, flexOptions }) {

  function addNewClub() {
    if (newClub.type && newClub.brand) {
      if (newClub.category !== "irons") {
        return createNewClub(newClub.category, newClub.type, newClub.brand, 1);
      } else {
        if (newClub.type === "3p") return createNewClub(newClub.category, newClub.type, newClub.brand, 8);
        if (newClub.type === "4a") return createNewClub(newClub.category, newClub.type, newClub.brand, 8);
        if (newClub.type === "4p") return createNewClub(newClub.category, newClub.type, newClub.brand, 7);
        if (newClub.type === "5a") return createNewClub(newClub.category, newClub.type, newClub.brand, 7);
        if (newClub.type === "5p") return createNewClub(newClub.category, newClub.type, newClub.brand, 6);
      }
    }
  };

  function displayOptions(array) {
    return array.map((value, key) => {
      return (
        <option value={value} key={key}>{value}</option>
      )
    });
  };

  return (
    <div className="addClubSelectContainer">
      <label>{ formatClubTitle(clubType) }</label>
      <select className={clubType} name="brand">
        { displayOptions(brands) }
      </select>
      <select className={clubType} name="type">
        { displayOptions(clubTypeNumbers) }
      </select>
      <select className={clubType} name="flex">
        {
          flexOptions.map((flexOption, key) => {
            return (
              <option value={flexOption} key={key}>{flexOption}</option>
            )
          })
        }
      </select>
      <button onClick={addNewClub}>Add {clubType}</button>
    </div>
  )
};

export default AddClubSelect;