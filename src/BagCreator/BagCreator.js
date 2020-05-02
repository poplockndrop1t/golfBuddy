import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import YourBag from './YourBag/YourBag.js';
import './BagCreator.css';

function BagCreator({
  bag,
  clubNumbers,
  setBagState,
  createNewClub,
  newClub,
  setNewClubValue,
  brands,
  ironSets,
  wedgeNumbers }) {

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
          clubNumbers={clubNumbers}
          ironSets={ironSets}
          wedgeNumbers={wedgeNumbers}
          />
        <YourBag bag={bag} />
      </div>
    </div>
  )
};

export default BagCreator;