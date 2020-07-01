import React from "react";

export default function DisplayOrder({ object }) {
  let { items } = object;
  let item = [];
  let j = "";
  for (let i = 0; i < items.length; i++) {
    while (items[i] !== ";") {
      j += items[i];
      i++;
    }
    item.push(j);
    j = "";
  }
  // {item.map(i=><div>{i}</div>)}

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">{object.orderId}</div>
        <div className="col-10 mx-auto col-lg-2">{object.customerId}</div>
        <div className="col-10 mx-auto col-lg-2">{object.pin}</div>
        <div className="col-10 mx-auto col-lg-2">{object.date}</div>
        <div className="col-10 mx-auto col-lg-2">
          {item.map((i, idx) => (
            <div key={idx}>{i}</div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}
