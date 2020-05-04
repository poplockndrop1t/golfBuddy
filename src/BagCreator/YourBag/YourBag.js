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
      <Club bag={bag} bagSize={bagSize} />
      <div className="club">
        <h3>Woods</h3>
        {formatClubs(bag.woods)}
      </div>
      <div className="club">
        <h3>Hybrids</h3>
        {formatClubs(bag.hybrids)}
      </div>
      <div className="club">
        <h3>Irons</h3>
        {formatClubs(bag.irons)}
      </div>
      <div className="club">
        <h3>Wedges</h3>
        {formatClubs(bag.wedges)}
      </div>
      <div className="club">
        <h3>Putter</h3>
        {bag.putter}
      </div>
    </div>
  )
};

export default YourBag;