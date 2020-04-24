import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import './BagCreator.css';

function formatClubs(array) {
  return (
    <ul>
      {
        array.map((wood, key) =>
           <li key={key}>{wood.type} {wood.brand}</li>
        )
      }
    </ul>
  )
};

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
      <h6>Your Bag</h6>
      <h6>Driver --- { bag.driver }</h6>
      <h6>Woods --- { formatClubs(bag.woods) }</h6>
      <h6>Hybrids --- { formatClubs(bag.hybrids) }</h6>
    </div>
  )
};

export default BagCreator;