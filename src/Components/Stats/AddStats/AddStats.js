import React from 'react';
import './AddStats.css';

function AddStats(props) {
  return (
    <div>
      <form>
        <h2>Add Your Round</h2>
        <label>FIR</label>
        <input id="fir"></input>
        <label>FIR Attempts</label>
        <input id="firAttempts"></input>
        <label>FIR</label>
        <input id="gir"></input>
        <label>FIR Attempts</label>
        <input id="girAttempts"></input>
        <label>Total Up And Downs within 30 Yards</label>
        <input id="upAndDown30Yard"></input>
        <label>Attempts at Up And Downs within 30 Yards</label>
        <input id="upAndDown30YardAttempts"></input>
        <label>Total Wedge Approaches within 6ft inside 100 yards.</label>
        <input id="wedgeAppInside100"></input>
        <label>Wedge Approach Attempts within 6ft inside 100 yards.</label>
        <input id="wedgeAppInside100Attempts"></input>
        <label>Total Putts made within 12 Ft.</label>
        <input id="puttsMadeWithin12Ft"></input>
        <label>Attempts at Putts Made Within 12 Ft</label>
        <input id="puttsMadeWithin12FtAttempts"></input>
        <label>Score</label>
        <input id="score"></input>
        <label>Par</label>
        <input id="par"></input>
        <input type="submit" value="Add Stats"></input>
      </form>
    </div>
  )
};

export default AddStats;