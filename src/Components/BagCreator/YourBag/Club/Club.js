import React from 'react';
import { formatClubTitle } from '../../../../Helpers/Helpers.js';
import './Club.css';

function Club(props) {

  function handleClick(club, key) {
    if (props.bagSize > 0) {
      props.removeClub({ clubType: club.category, i: key });
      if (club.clubType === '3p') return props.decrementBagSize(8);
      if (club.clubType === '4a') return props.decrementBagSize(8);
      if (club.clubType === '4p') return props.decrementBagSize(7);
      if (club.clubType === '5a') return props.decrementBagSize(7);
      if (club.clubType === '5p') return props.decrementBagSize(6);
      if (club.category !== 'irons') return props.decrementBagSize(1);
    }
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