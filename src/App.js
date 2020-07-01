import React, { useState } from "react";
import "./App.css";
import { CSVReader } from "react-papaparse";
import DisplayOrder from "./components/DisplayOrder";
import Container from "./components/Container";
import { Search } from "./components/Search";
import moment from "moment";

let object1 = [];

function App() {
  const [flag, setFlag] = useState(false);
  const [object, setObject] = useState([]);
  const [pin, setPin] = useState("");
  const [date, setDate] = useState("");

  const handleOnDrop = (data) => {
    for (let i = 1; i < data.length; i++) {
      let orderId = data[i].data[0];
      let customerId = data[i].data[1];
      let pin = data[i].data[2];
      let date = data[i].data[3];
      let items = data[i].data[4];

      object1.push({
        orderId,
        customerId,
        pin,
        date,
        items,
      });
    }
    setObject(object1);
    setFlag(true);
  };

  const formatObjectDate = (date) => {
    var date1 = date.split("/");
    var d = new Date(date1[2], date1[1] - 1, date1[0]);
    const d1 = moment(d).format("MM-DD-YYYY");
    return d1;
  };

  const formatInputDate = (date) => {
    const d = moment(date).format("MM-DD-YYYY");
    return d;
  };

  const searchByPin = (pin) => {
    // pin1 = pin;
    // if (date1 !== "" && input === true) {
    //   input=false
    //   searchByDate(date1);
    // }
    // input=true
    setPin(pin);
    setDate("");
    setObject(object1.filter((obj) => obj.pin === pin));
  };

  const searchByDate = (date) => {
    // date1 = date;
    // if (pin1 !== "" && input === true) {
    //   input=false
    //   searchByPin(pin1);
    // }
    // input=true
    setDate(date);
    setPin("");
    setObject(
      object1.filter(
        (obj) => formatObjectDate(obj.date) === formatInputDate(date)
      )
    );
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log(data);
  };
  return !flag ? (
    <div className="container csv">
      <CSVReader
        onDrop={(data) => handleOnDrop(data)}
        onError={(err) => handleOnError(err)}
        addRemoveButton
        onRemoveFile={(data) => handleOnRemoveFile(data)}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </div>
  ) : (
    <div>
      <Search
        searchByDate={searchByDate}
        searchByPin={searchByPin}
        pin={pin}
        date={date}
      />
      <Container />
      {object.map((obj) => (
        <DisplayOrder key={obj.orderId} object={obj} />
      ))}
    </div>
  );
}

export default App;
