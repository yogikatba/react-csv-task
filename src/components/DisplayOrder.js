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
    <div class="container">
      <div class="row">
        <div class="col-sm">{object.orderId}</div>
        <div class="col-sm">{object.customerId}</div>
        <div class="col-sm">{object.pin}</div>
        <div class="col-sm">{object.date}</div>
        <div class="col-sm">{item.map((i, idx)=><div key={idx}>{i}</div>)}</div>
      </div>
      <hr/>
    </div>
  );
}
