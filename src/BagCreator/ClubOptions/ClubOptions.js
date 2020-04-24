import React from 'react';
import './ClubOptions.css';

class ClubOptions extends React.Component {
  constructor(props) {
    super(props);

    this.handleCange = this.handleCange.bind(this);
    this.handleClubChange = this.handleClubChange.bind(this);
    this.addNewClub = this.addNewClub.bind(this);
  };

  handleCange(event) {
    return this.props.setBagState(event.target.name, event.target.value);
  }; 

  handleClubChange(event) {
    return this.props.setNewClubValue(event.target.name, event.target.value, event.target.classList[0]);
  };

  addNewClub() {
    if (this.props.newClub.type && this.props.newClub.brand) {
      return this.props.createNewClub(this.props.newClub.type, this.props.newClub.brand);
    }
  };

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
        <div className="woodsContainer" onChange={ this.handleClubChange }>
          <select className="woods" name="type" >
            <option value="3+">3+</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select className="woods" name="brand" >
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
          <button onClick={ this.addNewClub }>Add Wood</button>
        </div>
        <div className="hybridsContainer" onChange={ this.handleClubChange }>
          <select className="hybrids" name="type">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select className="hybrids" name="brand" >
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
          <button onClick={ this.addNewClub }>Add Hybrid</button>
        </div>
      </div>
    )
  }
};

export default ClubOptions;
