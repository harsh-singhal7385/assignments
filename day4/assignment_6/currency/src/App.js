import './App.css';
import React, { useState, useEffect } from 'react'
import Usd from './components/Usd';

function App(props) {

  const [dataOperationcomplete, setDataSend] = useState({
    general_info : "",
    complete_info : "",
    final_amount : ""
  })

  const obj = {
    usd : 80,
    inr : 1,
    euro : 100,
    aed : 20,
    cad : 30,

  }

  const getData =  (data) => {
    console.log(data," inside app.js / parent")
  
    console.log(data.currency_1)
    let my_general_calc = (obj[data.currency_1] / obj[data.currency_2]).toFixed(4)
    let my_complete_calc = my_general_calc * Number(data.input_1)



    console.log("before sendData")

    setDataSend({
      general_info : `Value of 1 ${(data.currency_1).toUpperCase()} is equivalent to ${my_general_calc} ${(data.currency_2).toUpperCase()}...`,
      complete_info : `Value of ${data.input_1} ${(data.currency_1).toUpperCase()} is equivalent to ${my_complete_calc} ${(data.currency_2).toUpperCase()}...`,
      final_amount : `${my_complete_calc}`
    })

    console.log("after  sendData")
    console.log(my_general_calc,my_complete_calc)
    console.log(`Value of 1 ${(data.currency_1).toUpperCase()} is equivalent to ${my_general_calc} ${(data.currency_2).toUpperCase()}...`)
    console.log(`Value of ${data.input_1} ${(data.currency_1).toUpperCase()} is equivalent to ${my_complete_calc} ${(data.currency_2).toUpperCase()}...`)

  }

  useEffect(() => {
    console.log(dataOperationcomplete,"use effect in app.js")
    // sendData(dataOperationcomplete)

  },[dataOperationcomplete]);

  // const sendData = (data) =>{
  //   props.sendData(data)
  // }

  return (
    <>
      <h1 className='my-center-style'>Welcome to currency converter!!!</h1>
      <Usd getData={getData} sendDataToChild={dataOperationcomplete}/>
    </>
  );
}

export default App;
