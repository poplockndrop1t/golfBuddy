import React from 'react';
import AddStats from './AddStats/AddStats.js';
import './Stats.css';

function Stats(props) {
  return (
    <div className="statsContainer">
      <AddStats />
      <div>
        <h2>Stats Display</h2>
      </div>
    </div>
  )
};

export default Stats;