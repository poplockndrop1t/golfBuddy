import React from 'react';
import './Stats.css';

function Stats(props) {
  return (
    <div className="statsContainer">
      <h2>Stats</h2>
      <form>
        <label for="fir">FIR</label>
        <input id="fir"></input>
        <label for="firAttempts">FIR Attempts</label>
        <input id="firAttempts"></input>
        <label for="gir">FIR</label>
        <input id="gir"></input>
        <label for="girAttempts">FIR Attempts</label>
        <input id="girAttempts"></input>
        <label for="upAndDown30Yard">Total Up And Downs within 30 Yards</label>
        <input id="upAndDown30Yard"></input>
        <label for="upAndDown30YardAttempts">Attempts at Up And Downs within 30 Yards</label>
        <input id="upAndDown30YardAttempts"></input>
        <label for="wedgeAppInside100">Total Wedge Approaches within 6ft inside 100 yards.</label>
        <input id="wedgeAppInside100"></input>
        <label for="wedgeAppInside100Attempts">Wedge Approach Attempts within 6ft inside 100 yards.</label>
        <input id="wedgeAppInside100Attempts"></input>
        <label for="puttsMadeWithin12Ft">Total Putts made within 12 Ft.</label>
        <input id="puttsMadeWithin12Ft"></input>
        <label for="puttsMadeWithin12FtAttempts">Attempts at Putts Made Within 12 Ft</label>
        <input id="puttsMadeWithin12FtAttempts"></input>
        <label for="score">Score</label>
        <input id="score"></input>
        <label for="par">Par</label>
        <input id="par"></input>
      </form>
    </div>
  )
};

export default Stats;