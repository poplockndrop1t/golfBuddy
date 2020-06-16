import React from 'react';
import Club from './Club/Club.js';
import './YourBag.css';

function displayBag(props) {
  var clubValuesArray = Object.values(props.bag);

  return (
    <div>
      {
        Object.keys(props.bag).map((club, key) => {
          return (
            <Club
              club={clubValuesArray[key]}
              clubType={club}
              decrementBagSize={props.decrementBagSize}
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
      <h2><u>Your Bag</u></h2>
      <p>{ props.bagSize } Clubs Total</p>
      { displayBag(props) }
    </div>
  )
};

export default YourBag;