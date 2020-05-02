import React from 'react';
import './AddClubSelect.css';

function AddClubSelect({ createNewClub, newClub }) {
  function addNewClub() {
    console.log(createNewClub);
  };

  return (
    <div>
      <button onClick={addNewClub}>Add Wood</button>
    </div>
  )
};

export default AddClubSelect;