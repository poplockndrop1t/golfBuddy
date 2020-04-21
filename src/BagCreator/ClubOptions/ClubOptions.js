import React from 'react';
import './ClubOptions.css';

class ClubOptions extends React.Component {
  constructor(props) {
    super(props);

    this.handleCange = this.handleCange.bind(this);
    this.handleWoodsChange = this.handleWoodsChange.bind(this);
    this.addNewWood = this.addNewWood.bind(this);
  }

  handleCange(event) {
    return this.props.setBagState(event.target.name, event.target.value);
  }
  handleWoodsChange(event) {
    return this.props.setNewClubValue(event.target.name, event.target.value, 'woods');
  }
  addNewWood() {
    if (this.props.newClub.type && this.props.newClub.brand) {
      return this.props.createNewClub(this.props.newClub.type, this.props.newClub.brand, 'woods');
    }
  }

  render() {
    return (
      <div className="bagCreatorContainer">
        <div className="driverContainer">
          <label>Driver
            <select name="driver" onChange={ this.handleCange }>
              <option value="TaylorMade">TaylorMade</option>
              <option value="Titleist">Titleist</option>
              <option value="Callaway">Callaway</option>
              <option value="Ping">Ping</option>
            </select>
          </label>
        </div>
        <div className="woodsContainer" onChange={ this.handleWoodsChange }>
          <select name="type" >
            <option value="3+">3+</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select name="brand" >
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
          <button onClick={ this.addNewWood }>Add Wood</button>
        </div>
      </div>
    )
  }
};

export default ClubOptions;