import React from 'react';
import Club from './Club/Club.js';
import './YourBag.css';

function displayBag(bagObject) {
  var clubTypeArray = Object.keys(bagObject);
  var clubValuesArray = Object.values(bagObject);

  return (
    <div>
      {
        clubTypeArray.map((club, key) => {
          return (
            <Club club={clubValuesArray[key]} clubType={club} key={key} />
          )
        })
      }
    </div>
  )
};

function YourBag({ bag, bagSize }) {
  return (
    <div className="yourBagContainer">
      <h2>Your Bag</h2>
      <p>{bagSize} Clubs Total</p>
      {displayBag(bag)}
    </div>
  )
};

export default YourBag;