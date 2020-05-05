import React from 'react';
import AddClubSelect from './AddClubSelect/AddClubSelect.js';
import ClubSelect from './ClubSelect/ClubSelect.js';
import './ClubOptions.css';

function ClubOptions(props) {

  function handleChange(event) {
    return props.setDriverOrPutter(event.target.name, event.target.value, 1);
  };

  function handleClubChange(event) {
    return props.setNewClubValue(event.target.name, event.target.value, event.target.classList[0]);
  };

  return (
    <div className="clubOptionsContainer">
      <div className="driverContainer" onChange={handleChange}>
        <ClubSelect clubType={"driver"} options={props.brands} />
      </div>
      <div className="woodsContainer" onChange={handleClubChange}>
        <AddClubSelect
          createNewClub={ props.createNewClub }
          newClub={ props.newClub }
          brands={ props.brands}
          clubNumbers={ props.clubNumbers }
          clubType={"woods"}/>
      </div>
      <div className="hybridsContainer" onChange={handleClubChange}>
        <AddClubSelect
          createNewClub={props.createNewClub}
          newClub={props.newClub}
          brands={props.brands}
          clubNumbers={props.clubNumbers}
          clubType={"hybrids"} />
      </div>
      <div className="ironsContainer" onChange={handleClubChange}>
        <AddClubSelect
          createNewClub={props.createNewClub}
          newClub={props.newClub}
          brands={props.brands}
          clubNumbers={props.ironNumbers}
          clubType={"irons"} />
      </div>
      <div className="wedgesContainer" onChange={handleClubChange}>
        <AddClubSelect
          createNewClub={props.createNewClub}
          newClub={props.newClub}
          brands={props.brands}
          clubNumbers={props.wedgeNumbers}
          clubType={"wedges" } />
      </div>
      <div className="putterContainer" onChange={handleChange}>
        <ClubSelect clubType={"putter"} options={props.brands} />
      </div>
    </div>
  )
};

export default ClubOptions;