import React from 'react';
import { formatClubTitle } from '../../../../Helpers/Helpers.js';
import './AddClubSelect.css';

function AddClubSelect({ brands, clubTypeNumbers, clubType, createNewClub, newClub, flexOptions }) {

  function addNewClub() {
    if (newClub.clubType && newClub.brand && newClub.flex) {
      const { category, clubType, brand, flex } = newClub;
      if (clubType === '3p') return createNewClub(category, clubType, brand, 8, flex);
      if (clubType === '4a') return createNewClub(category, clubType, brand, 8, flex);
      if (clubType === '4p') return createNewClub(category, clubType, brand, 7, flex);
      if (clubType === '5a') return createNewClub(category, clubType, brand, 7, flex);
      if (clubType === '5p') return createNewClub(category, clubType, brand, 6, flex);
      if (newClub.category !== 'irons') return createNewClub(category, clubType, brand, 1, flex);
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