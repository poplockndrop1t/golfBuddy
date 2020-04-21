import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import './BagCreator.css';

function formatWoods(array) {
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

function BagCreator({ bag, setBagState }) {
  return (
    <div className="bagCreatorContainer">
      <h2>Bag Creator</h2>
      <h6>Add your clubs and create your own pdf</h6>
      <ClubOptions
        bag={bag}
        setBagState={setBagState}
        />

      <h6>Your Bag</h6>
      <h6>Driver --- { bag.driver }</h6>
      <h6>Woods --- { formatWoods(bag.woods) }</h6>
    </div>
  )
};

export default BagCreator;