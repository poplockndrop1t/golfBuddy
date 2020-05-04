import React from 'react';
import Club from './Club/Club.js';
import './YourBag.css';

function formatClubs(array) {
  return (
    <div>
      {
        array.map((wood, key) => {
          return (
            <p key={key}>{wood.type} {wood.brand}</p>
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

      <Club club={bag.driver} clubType={"Driver"} />

      <Club club={bag.woods} clubType={"Woods"} />

      <Club club={bag.hybrids} clubType={"Hybrids"} />

      <Club club={bag.irons} clubType={"Irons"} />

      <Club club={bag.wedges} clubType={"Wedges"} />

      <Club club={bag.putter} clubType={"Putter"} />
    </div>
  )
};

export default YourBag;