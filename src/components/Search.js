import React from "react";

export const Search = (props) => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-10 mx-auto col-lg-2">
          <label>Pin:</label>
          <input
            type="number"
            onChange={(e) => props.searchByPin(e.target.value)}
            value={props.pin}
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <label>Date:</label>
          <input
            type="date"
            onChange={(e) => props.searchByDate(e.target.value)}
            value={props.date}
          />
        </div>
      </div>
    </div>
  );
};
