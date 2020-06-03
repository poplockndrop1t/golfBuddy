import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import YourBag from './YourBag/YourBag.js';
import './BagCreator.css';

function BagCreator(props) {
  var username;

  function handleSubmit(event) {
    return props.updateBag('POST', { username })
  };

  return (
    <div className="container">
      <div>
        <h2>Bag Creator</h2>
        <h6>Add your clubs and create your own pdf</h6>
      </div>
      <form>
        <input name="username" onChange={(event) => username = event.target.value} />
        <button onClick={handleSubmit} value="submit">Enter username:</button>
      </form>
      <div className="bagCreatorContainer">
        <ClubOptions
          bag={props.bag}
          brands={props.brands}
          flexOptions={props.flexOptions}
          clubTypeNumbers={props.clubTypeNumbers}
          createNewClub={props.createNewClub}
          newClub={props.newClub}
          setNewClubValue={props.setNewClubValue}
        />
        <YourBag
          bag={props.bag}
          bagSize={props.bagSize}
          removeClub={props.removeClub}
        />
      </div>
    </div>
  )
};

export default BagCreator;