import React from 'react';
import './Club.css';

function Club({ bag, bagSize }) {
  return (
    <div className="club">
      <h3>Driver</h3>
      {bag.driver}
    </div>
  )
};

export default Club;