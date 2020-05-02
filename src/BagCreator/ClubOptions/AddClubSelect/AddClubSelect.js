import React from 'react';
import './AddClubSelect.css';

function AddClubSelect({
  createNewClub,
  newClub,
  brands,
  clubNumbers,
  clubType }) {

  function addNewClub() {
    if (newClub.type && newClub.brand) {
      return createNewClub(newClub.type, newClub.brand);
    }
  };

  return (
    <div className="addClubSelectContainer">
      <label>{clubType}</label>
      <select className={clubType} name="type">
        {
          clubNumbers.map((number, key) => {
            return (
              <option value={number} key={key}>{number}</option>
            )
          })
        }
      </select>
      <select className={clubType} name="brand">
        {
          brands.map((brand, key) => {
            return (
              <option value={brand} key={key}>{brand}</option>
            )
          })
        }
      </select>
      <button onClick={addNewClub}>Add {clubType}</button>
    </div>
  )
};

export default AddClubSelect;