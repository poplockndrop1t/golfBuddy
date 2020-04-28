import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import YourBag from './YourBag/YourBag.js';
import './BagCreator.css';

function BagCreator({ bag, setBagState, createNewClub, newClub, setNewClubValue }) {
  return (
    <div className="bagCreatorContainer">
      <h2>Bag Creator</h2>
      <h6>Add your clubs and create your own pdf</h6>
      <ClubOptions
        bag={bag}
        newClub={newClub}
        setBagState={setBagState}
        setNewClubValue={setNewClubValue}
        createNewClub={createNewClub}
        />
      <YourBag bag={bag} />
    </div>
  )
};

export default BagCreator;