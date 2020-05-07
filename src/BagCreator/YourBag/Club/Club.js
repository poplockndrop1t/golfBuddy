import React from 'react';
import './Club.css';

function Club(props) {

  function handleClick(event) {
    return props.removeClub(props.clubType, props.club, props.i);
  };

  return (
    <div className="club">
      <h3>{props.clubType}</h3>
      {
        props.club.map((club, key) => {
          return (
            <p key={key}>
              {club.type} {club.brand}
              <button onClick={handleClick} >Remove Club</button>
            </p>
          )
        })
      }
    </div>
  )
}

export default Club;