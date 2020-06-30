import React,{useEffect, useState} from 'react';
import './App.css';
import { CSVReader } from 'react-papaparse'
import DisplayOrder from './components/DisplayOrder';
// import Moment from 'react-moment';
// import moment from 'moment'

let object1 = []

function App() {

  const [flag, setFlag] = useState(false)
  const [object, setObject] = useState([])

  const handleOnDrop = (data) => {
    for(let i=1; i< data.length; i++){
        //console.log(data[i].data)
        let orderId = data[i].data[0]
        let customerId = data[i].data[1]
        let pin = data[i].data[2]
        let date = data[i].data[3]
        // date = moment(date,"MM/DD/YYYY")
        // console.log(date)
        let items = data[i].data[4]
        //console.log(items)
        // for(let j=4;j<data[i].length;j++){
        //   items = [...items, data[i].data[j]]
        // }
        object1.push({
          orderId,
          customerId,
          pin,
          date,
          items}
        )
        //console.log(object1)
    }
    setObject(object1)
    setFlag(true)
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const handleOnRemoveFile = (data) => {
    console.log(data)
  }
    return (
      (!flag) ? 
        (<CSVReader
          onDrop={(data)=>handleOnDrop(data)}
          onError={(err) => handleOnError(err)}
          addRemoveButton
          onRemoveFile={(data)=>handleOnRemoveFile(data)}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>)
        : (object.map(obj=><DisplayOrder key={obj.orderId} object={obj} />))
    )
  }

export default App;
