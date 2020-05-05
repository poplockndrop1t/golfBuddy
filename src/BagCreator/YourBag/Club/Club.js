import React from 'react';
import './Club.css';

function handleClick(event) {
  console.log(event.target)
};

function formatClub(club, clubType) {
  return (
    <div className="club">
      <h3>{clubType}</h3>
      <p onClick={handleClick}>{club}</p>
    </div>
  )
};

function formatClubsArray(array, clubType) {
  return (
    <div className="club">
      <h3>{clubType}</h3>
      {
        array.map((wood, key) => {
          return (
            <p onClick={handleClick} key={key}>{wood.type} {wood.brand}</p>
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
  } else {
    return (
      formatClubsArray(club, clubType)
    )
  }
};

export default Club;