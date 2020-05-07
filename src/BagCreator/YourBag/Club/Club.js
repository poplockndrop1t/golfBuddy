import React from 'react';
import './Club.css';

class Club extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.formatClubsArray = this.formatClubsArray.bind(this);
  }

  handleClick(event) {
    return this.props.removeClub(this.props.clubType, this.props.club, this.props.i);
  };

  formatClubsArray() {
  };

  render() {
    // return (
    //   this.formatClubsArray()
    // )
    return (
      <div className="club">
        <h3>{this.props.clubType}</h3>
        {
          this.props.club.map((club, key) => {
            return (
              <p key={key}>{club.type} {club.brand}</p>
            )
          })
        }
      </div>
    )
  }
}

export default Club;