import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="landingContainer">
      <div className="topContainer">
        <h1>
          Welcome to Golf Buddy <span role="img" aria-label="golf buddy">⛳️</span>
        </h1>
      </div>
      <div className="midleContainer">
        <h1>
          Green Section
        </h1>
      </div>
    </div>
  )
};

export default Landing;