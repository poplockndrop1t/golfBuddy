import React from 'react';
import { formatClubTitle } from '../../../../Helpers/Helpers.js';
import './Club.css';

function Club(props) {

  function handleClick(club, key) {
    console.log('key', club, key)
    return props.removeClub(club, key);
  };

  return (
    <div className="club">
      <h3>{ formatClubTitle(props.clubType) }</h3>
      {
        props.club.map((club, key) => {
          return (
            <p key={key}>
              {club.clubType} {club.brand} {club.flex}
              <br/>
              <button onClick={() => handleClick(club, key)} >Remove Club</button>
            </p>
          )
        })
      }
    </div>
  )
}

export default Club;