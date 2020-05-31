import React from 'react';
import { formatClubTitle } from '../../../../Helpers/Helpers.js';
import './AddClubSelect.css';

function AddClubSelect({ brands, clubTypeNumbers, clubType, createNewClub, newClub, flexOptions }) {

  function addNewClub() {
    if (newClub.clubType && newClub.brand && newClub.flex) {
      if (newClub.category !== "irons") {
        return createNewClub(newClub.category, newClub.clubType, newClub.brand, 1, newClub.Flex);
      } else {
        if (newClub.clubType === "3p") return createNewClub(newClub.category, newClub.clubType, newClub.brand, 8, newClub.Flex);
        if (newClub.clubType === "4a") return createNewClub(newClub.category, newClub.clubType, newClub.brand, 8, newClub.Flex);
        if (newClub.clubType === "4p") return createNewClub(newClub.category, newClub.clubType, newClub.brand, 7, newClub.Flex);
        if (newClub.clubType === "5a") return createNewClub(newClub.category, newClub.clubType, newClub.brand, 7, newClub.Flex);
        if (newClub.clubType === "5p") return createNewClub(newClub.category, newClub.clubType, newClub.brand, 6, newClub.Flex);
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
      <label><h3>{ formatClubTitle(clubType) }</h3></label>
      <select className={clubType} name="brand">
        { displayOptions(brands) }
      </select>
      <select className={clubType} name="clubType">
        { displayOptions(clubTypeNumbers) }
      </select>
      <select className={clubType} name="flex">
        { displayOptions(flexOptions) }
      </select>
      <button onClick={addNewClub}>Add {formatClubTitle(clubType)}</button>
    </div>
  )
};

export default AddClubSelect;