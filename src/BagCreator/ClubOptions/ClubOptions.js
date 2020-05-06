import React from 'react';
import AddClubSelect from './AddClubSelect/AddClubSelect.js';
import ClubSelect from './ClubSelect/ClubSelect.js';
import './ClubOptions.css';


function ClubOptions(props) {

  var clubTypeArray = Object.keys(props.bag);
  var clubValuesArray = Object.values(props.bag);

  function handleClubChange(event) {
    return props.setNewClubValue(event.target.name, event.target.value, event.target.classList[0]);
  };

  return (
    <div className="clubOptionsContainer">
      {
        clubTypeArray.map((clubType, key) => {
          return (
            <div onChange={handleClubChange}>
              <AddClubSelect
                key={key}
                createNewClub={props.createNewClub}
                newClub={props.newClub}
                brands={props.brands}
                clubNumbers={props.clubNumbers}
                clubType={clubType}
              />
            </div>
          )
        })
      }
    </div>
  )
};

export default ClubOptions;