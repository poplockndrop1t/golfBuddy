import React from 'react';
import AddClubSelect from './AddClubSelect/AddClubSelect.js';
import './ClubOptions.css';

function ClubOptions(props) {

  function handleClubChange(event) {
    return props.setNewClubValue(event.target.name, event.target.value, event.target.classList[0]);
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