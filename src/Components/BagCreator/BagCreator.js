import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import YourBag from './YourBag/YourBag.js';
import './BagCreator.css';

function BagCreator(props) {
  var username = '';

  function handleSubmit(event) {
    if (username.length > 0) {
      const bagModel = props.bag;
      bagModel.username = username;
      if (event.target.name === 'save') {
        return props.saveBag('POST', bagModel);
      }
      if (event.target.name === 'fetch') {
        return props.saveBag('POST', bagModel);
      }
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Bag Creator</h2>
        <h6>Add your clubs and create your own pdf</h6>
      </div>
      <div>
        <label>Enter username:</label>
        <input name="username" onChange={(event) => username = event.target.value} />
        <button name="save" onClick={handleSubmit}>Save Bag</button>
        <button name="fetch" onClick={handleSubmit}>Fetch Bag</button>
      </div>
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