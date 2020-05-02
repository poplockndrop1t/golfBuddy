import React from 'react';
import './ClubOptions.css';
import ClubSelect from './ClubSelect/ClubSelect.js';
import AddClubSelect from './AddClubSelect/AddClubSelect.js';

class ClubOptions extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClubChange = this.handleClubChange.bind(this);
    this.addNewClub = this.addNewClub.bind(this);
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
          <ClubSelect clubType={"driver"} options={this.props.brands} />
        </div>
        <div className="woodsContainer" onChange={ this.handleClubChange }>
          <AddClubSelect
            createNewClub={ this.props.createNewClub }
            newClub={ this.props.newClub }
            brands={ this.props.brands}
            clubNumbers={ this.props.clubNumbers }
            clubType={"woods"}/>
        </div>
        <div className="hybridsContainer" onChange={ this.handleClubChange }>
          <AddClubSelect
            createNewClub={this.props.createNewClub}
            newClub={this.props.newClub}
            brands={this.props.brands}
            clubNumbers={this.props.clubNumbers}
            clubType={"hybrids"} />
        </div>
        <div className="ironsContainer" onChange={ this.handleClubChange }>
          <AddClubSelect
            createNewClub={this.props.createNewClub}
            newClub={this.props.newClub}
            brands={this.props.brands}
            clubNumbers={this.props.clubNumbers}
            clubType={"irons"} />
        </div>
        <div className="wedgesContainer" onChange={ this.handleClubChange }>
          <AddClubSelect
            createNewClub={this.props.createNewClub}
            newClub={this.props.newClub}
            brands={this.props.brands}
            clubNumbers={this.props.wedgeNumbers}
            clubType={"wedges" } />
        </div>
        <div className="putterContainer" onChange={ this.handleChange }>
          <ClubSelect clubType={"putter"} options={this.props.brands} />
        </div>
      </div>
    )
  }
};

export default ClubOptions;