import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import './BagCreator.css';

function BagCreator() {
  return (
    <div className="bagCreatorContainer">
      <h2>Bag Creator</h2>
      <h6>Add your clubs and create your own pdf</h6>
      <ClubOptions />
    </div>
  )
};

export default BagCreator;