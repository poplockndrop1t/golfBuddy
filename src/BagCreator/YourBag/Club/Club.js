import React from 'react';
import './Club.css';

function formatClub(club, clubType) {
  return (
    <div className="club">
      <h3>{clubType}</h3>
      <p>{club}</p>
    </div>
  )
};

function formatClubsArray(array) {
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

function Club({ club, clubType }) {
  if (typeof club === 'string') {
    return (
      formatClub(club, clubType)
    )
  }
};

export default Club;
    // <div className="club">
    //   <h3>{clubType}</h3>
    //   <p>{club}</p>
    // </div>