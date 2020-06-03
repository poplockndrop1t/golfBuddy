import React from 'react';
import { formatClubTitle } from '../../../../Helpers/Helpers.js';
import './Club.css';

function Club(props) {

  function handleClick(club, key) {
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
              <button className="removeClub" onClick={() => handleClick(club, key)} >X</button>
            </p>
          )
        })
      }
    </div>
  )
}

export default Club;