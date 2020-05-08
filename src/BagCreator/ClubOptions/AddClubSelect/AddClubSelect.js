import React from 'react';
import './AddClubSelect.css';

function AddClubSelect({ brands, clubTypeNumbers, clubType, createNewClub, newClub, flexOptions }) {

  function addNewClub() {
    if (newClub.type && newClub.brand) {
      if (newClub.category !== "irons") {
        return createNewClub(newClub.type, newClub.brand, 1);
      } else {
        if (newClub.type === "3p") return createNewClub(newClub.type, newClub.brand, 8);
        if (newClub.type === "4a") return createNewClub(newClub.type, newClub.brand, 8);
        if (newClub.type === "4p") return createNewClub(newClub.type, newClub.brand, 7);
        if (newClub.type === "5a") return createNewClub(newClub.type, newClub.brand, 7);
        if (newClub.type === "5p") return createNewClub(newClub.type, newClub.brand, 6);
      }
    }
  };

  return (
    <div className="addClubSelectContainer">
      <label>{clubType}</label>
      <select className={clubType} name="brand">
        {
          brands.map((brand, key) => {
            return (
              <option value={brand} key={key}>{brand}</option>
            )
          })
        }
      </select>
      <select className={clubType} name="type">
        {
          clubTypeNumbers.map((number, key) => {
            return (
              <option value={number} key={key}>{number}</option>
            )
          })
        }
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