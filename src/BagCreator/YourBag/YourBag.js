import React from 'react';
import './YourBag.css';

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

function YourBag({ bag }) {
  return (
    <div className="yourBagContainer">
      <h6>Your Bag</h6>
      <div className="club">
        <h6>Driver</h6>
        <p>{ bag.driver }</p>
      </div>
      <div className="club">
        <h6>Woods</h6>
        <h6>{ formatClubs(bag.woods) }</h6>
      </div>
      <div className="club">
        <h6>Hybrids</h6>
        <h6>{ formatClubs(bag.hybrids) }</h6>
      </div>
      <div className="club">
        <h6>Irons</h6>
        <h6>{ formatClubs(bag.irons) }</h6>
      </div>
      <div className="club">
        <h6>Wedges</h6>
        <h6>{ formatClubs(bag.wedges) }</h6>
      </div>
      <div className="club">
        <h6>Putter</h6>
        <h6>{ bag.putter }</h6>
      </div>
    </div>
  )
};

export default YourBag;