import React from 'react';
import './ClubOptions.css';
import ClubSelect from './ClubSelect/ClubSelect.js';

class ClubOptions extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClubChange = this.handleClubChange.bind(this);
    this.addNewClub = this.addNewClub.bind(this);

    this.brands = ["TaylorMade", "Titleist", "Callaway", "Ping"];
  };

  handleChange(event) {
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
      <div className="clubOptionsContainer">
        <div className="driverContainer" onChange={ this.handleChange }>
          <ClubSelect label={"driver"} options={this.brands} />
        </div>
        <div className="woodsContainer" onChange={ this.handleClubChange }>
          <label>Woods</label>
          <select className="woods" name="type">
            <option value=""></option>
            <option value="3+">3+</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select className="woods" name="brand">
            <option value=""></option>
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
          <button onClick={ this.addNewClub }>Add Wood</button>
        </div>
        <div className="hybridsContainer" onChange={ this.handleClubChange }>
          <label>Hybrids</label>
          <select className="hybrids" name="type">
            <option value=""></option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select className="hybrids" name="brand" >
            <option value=""></option>
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
          <button onClick={ this.addNewClub }>Add Hybrid</button>
        </div>
        <div className="ironsContainer" onChange={ this.handleClubChange }>
          <label>Irons</label>
          <select className="irons" name="type">
            <option value=""></option>
            <option value="3p">3p</option>
            <option value="4a">4a</option>
            <option value="5a">5a</option>
            <option value="5p">5p</option>
          </select>
          <select className="irons" name="brand" >
            <option value=""></option>
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
          <button onClick={ this.addNewClub }>Add Iron Set</button>
        </div>
        <div className="wedgesContainer" onChange={ this.handleClubChange }>
          <label>Wedges</label>
          <select className="irons" name="type">
            <option value=""></option>
            <option value="50">50</option>
            <option value="52">52</option>
            <option value="54">54</option>
            <option value="56">56</option>
            <option value="58">58</option>
            <option value="60">60</option>
          </select>
          <select className="wedges" name="brand">
            <option value=""></option>
            <option value="TaylorMade">TaylorMade</option>
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
          <button onClick={ this.addNewClub }>Add Wedge</button>
        </div>
        <div className="putterContainer" onChange={ this.handleChange }>
          <label>Putter</label>
          <select name="putter">
            <option value=""></option>
            <option value="TaylorMade">TaylorMade</option>
            <option value="Titleist">Titleist</option>
            <option value="Callaway">Callaway</option>
            <option value="Ping">Ping</option>
          </select>
        </div>
      </div>
    )
  }
};

export default ClubOptions;
