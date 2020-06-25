import React from 'react';
import './AddStats.css';

function AddStats(props) {
  function handleChange(event) {
    console.log('event', event.target.name, event.target.value);
  };

  function onClick(event) {
    console.log('ran', event);
  };

  return (
    <div>
      <form>
        <h2>Add Your Round</h2>
        <label>FIR</label>
        <input onChange={handleChange} name="fir" id="fir"></input>
        <label>FIR Attempts</label>
        <input onChange={handleChange} name="firAttempts" id="firAttempts"></input>
        <label>FIR</label>
        <input onChange={handleChange} name="gir" id="gir"></input>
        <label>FIR Attempts</label>
        <input onChange={handleChange} name="girAttempts" id="girAttempts"></input>
        <label>Total Up And Downs within 30 Yards</label>
        <input onChange={handleChange} name="upAndDown30Yard" id="upAndDown30Yard"></input>
        <label>Attempts at Up And Downs within 30 Yards</label>
        <input onChange={handleChange} name="upAndDown30YardAttempts" id="upAndDown30YardAttempts"></input>
        <label>Total Wedge Approaches within 6ft inside 100 yards.</label>
        <input onChange={handleChange} name="wedgeAppInside100" id="wedgeAppInside100"></input>
        <label>Wedge Approach Attempts within 6ft inside 100 yards.</label>
        <input onChange={handleChange} name="wedgeAppInside100Attempts" id="wedgeAppInside100Attempts"></input>
        <label>Total Putts made within 12 Ft.</label>
        <input onChange={handleChange} name="puttsMadeWithin12Ft" id="puttsMadeWithin12Ft"></input>
        <label>Attempts at Putts Made Within 12 Ft</label>
        <input onChange={handleChange} name="puttsMadeWithin12FtAttempts" id="puttsMadeWithin12FtAttempts"></input>
        <label>Score</label>
        <input onChange={handleChange} name="score" id="score"></input>
        <label>Par</label>
        <input onChange={handleChange} name="par" id="par"></input>
        <input onClick={onClick} type="submit" value="Add Stats"></input>
      </form>
    </div>
  )
};

export default AddStats;