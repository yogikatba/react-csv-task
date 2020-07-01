import React from "react";

export default function Container() {
  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">Order Id</div>
        <div className="col-10 mx-auto col-lg-2">Cust Id</div>
        <div className="col-10 mx-auto col-lg-2">Pin Code</div>
        <div className="col-10 mx-auto col-lg-2">Order Date</div>
        <div className="col-10 mx-auto col-lg-2">Items</div>
      </div>
      <hr />
    </div>
  );
}
