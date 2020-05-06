import React from 'react';
import Club from './Club/Club.js';
import './YourBag.css';

function displayBag(props) {
  var clubTypeArray = Object.keys(props.bag);
  var clubValuesArray = Object.values(props.bag);
  console.log(props);
  return (
    <div>
      {
        clubTypeArray.map((club, key) => {
          return (
            <Club
              club={clubValuesArray[key]}
              clubType={club}
              removeClub={props.removeClub}
              i={key}
              key={key}
            />
          )
        })
      }
    </div>
  )
};

function YourBag(props) {
  return (
    <div className="yourBagContainer">
      <h2>Your Bag</h2>
      <p>{props.bagSize} Clubs Total</p>
      {displayBag(props)}
    </div>
  )
};

export default YourBag;