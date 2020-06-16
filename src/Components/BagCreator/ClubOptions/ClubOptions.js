import React from 'react';
import AddClubSelect from './AddClubSelect/AddClubSelect.js';
import './ClubOptions.css';

function ClubOptions(props) {

  function handleClubChange(event) {
    const newClubObject = { item: event.target.name, value: event.target.value, category: event.target.classList[0] };
    return props.setNewClubValue(newClubObject);
  };

  return (
    <div className="clubOptionsContainer">
      {
        Object.keys(props.bag).map((clubType, key) => {
          return (
            <div key={key} onChange={handleClubChange}>
              <AddClubSelect
                createNewClub={props.createNewClub}
                newClub={props.newClub}
                brands={props.brands}
                clubTypeNumbers={props.clubTypeNumbers[clubType]}
                clubType={clubType}
                flexOptions={props.flexOptions}
              />
            </div>
          )
        })
      }
    </div>
  )
};

export default ClubOptions;