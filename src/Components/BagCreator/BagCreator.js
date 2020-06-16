import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import YourBag from './YourBag/YourBag.js';
import './BagCreator.css';

function BagCreator(props) {

  function handleSubmit(event) {
    if (props.username.username.length > 0) {
      const reqBody = {
        username: props.username,
        driver: props.bag.driver,
        woods: props.bag.woods,
        hybrids: props.bag.hybrids,
        irons: props.bag.irons,
        wedges: props.bag.wedges,
        putter: props.bag.putter
      }
      return props.saveBag('POST', reqBody, 'save');
    }
  };

  function isLoggedIn(username) {
    if (username.length === 0) {
      return (
        <div className="usernameContainer">
          <h5>Want to save your bag?  Login my dude!</h5>
        </div>
      )
    } else {
      return (
        <div className="usernameContainer">
          <h4>{props.username.username}</h4>
          <button name="save" onClick={handleSubmit}>Save Bag</button>
        </div>
      )
    }
  }

  return (
    <div className="container">
      <div className="bagCreatorTopContainer">
        <div className="bagCreatorTitleContainer">
          <h2>Bag Creator</h2>
          <h6>Add your clubs and create your own pdf</h6>
        </div>
        { isLoggedIn(props.username.username) }
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
          decrementBagSize={props.decrementBagSize}
          removeClub={props.removeClub}
        />
      </div>
    </div>
  )
};

export default BagCreator;