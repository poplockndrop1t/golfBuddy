import React from 'react';
import './Club.css';

function handleClick(club, clubType, id) {
  console.log('here', club, clubType, id)
};

function formatClub(club, clubType, id, props) {
  return (
    <div className="club">
      <h3>{clubType}</h3>
      <p>{club}</p>
      <button onClick={ () => handleClick(club, clubType, id) }>Remove Club</button>
    </div>
  )
};

function formatClubsArray(array, clubType, id, props) {
  return (
    <div className="club">
      <h3>{clubType}</h3>
      {
        array.map((club, key) => {
          return (
            <p key={key}>{club.type} {club.brand}</p>
          )
        })
      }
    </div>
  )
};

function Club({ club, clubType, i, removeClub }, props) {
  if (typeof club === 'string') {
    return (
      formatClub(props.club, props.clubType, props.i)
    )
  } else {
    return (
      formatClubsArray(props.club, props.clubType, props.i)
    )
  }
};

export default Club;