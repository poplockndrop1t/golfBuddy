import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import YourBag from './YourBag/YourBag.js';
import './BagCreator.css';

function BagCreator(props) {
  return (
    <div className="container">
      <div>
        <h2>Bag Creator</h2>
        <h6>Add your clubs and create your own pdf</h6>
      </div>
      <div className="bagCreatorContainer">
        <ClubOptions
          bag={props.bag}
          brands={props.brands}
          clubNumbers={props.clubNumbers}
          createNewClub={props.createNewClub}
          ironNumbers={props.ironNumbers}
          newClub={props.newClub}
          setDriverOrPutter={props.setDriverOrPutter}
          setNewClubValue={props.setNewClubValue}
          wedgeNumbers={props.wedgeNumbers}
        />
        <YourBag
          bag={props.bag}
          bagSize={props.bagSize}
        />
      </div>
    </div>
  )
};

export default BagCreator;