import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import YourBag from './YourBag/YourBag.js';
import './BagCreator.css';

function BagCreator({
  bag,
  setBagState,
  createNewClub,
  newClub,
  setNewClubValue,
  brands }) {

  return (
    <div className="container">
      <div>
        <h2>Bag Creator</h2>
        <h6>Add your clubs and create your own pdf</h6>
      </div>
      <div className="bagCreatorContainer">
        <ClubOptions
          bag={bag}
          newClub={newClub}
          setBagState={setBagState}
          setNewClubValue={setNewClubValue}
          createNewClub={createNewClub}
          brands={brands}
          />
        <YourBag bag={bag} />
      </div>
    </div>
  )
};

export default BagCreator;