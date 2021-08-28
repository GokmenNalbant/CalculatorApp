import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [data, setData] = useState("");
  const numbersBtns = [];

  ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0","00"].forEach(item => {
    numbersBtns.push(
      <button onClick={e => {
        setData(data + e.target.value)
      }}
        key={item}
        value={item}
      >
        {item}
      </button>
    );
  })

  const AddHandler = (e) => {
    setData(data + e.target.value);
  }
  const SubstractHandler = (e) => {
    setData(data + e.target.value)
  }
  const MultiplyHandler = (e) => {
    setData(data + e.target.value)
  }
  const DivideHandler = (e) => {
    setData(data + e.target.value)
  }
  const ResultHandler = (e) => {
    setData(data + e.target.value)
    let arr;
    if(data.includes("+")) {
      arr = data.split("+")
      const result = Number(arr[0]) + Number(arr[1]);
      setData(result);
    }
    if(data.includes("-")) {
      arr = data.split("-")
      const result = Number(arr[0]) - Number(arr[1]);
      setData(result);
    }
    if(data.includes("*")) {
      arr = data.split("*")
      const result = Number(arr[0]) * Number(arr[1]);
      setData(result);
    }
    if(data.includes("/")) {
      arr = data.split("/")
      const result = Number(arr[0]) / Number(arr[1]);
      setData(result);
    }
    

  }


  return (
    <div className="wrapper">
      <div className="input-area">
        {data}
      </div>
      <div className="clearbtns">
        <button onClick={() => setData(data.slice(0,-1))}>C</button>
        <button onClick={() => {setData("")}}>AC</button>
      </div>
      <div className="btns">
        {numbersBtns}
      </div>

      <div className="operations">
        <button onClick={AddHandler} value="+">+</button>
        <button onClick={SubstractHandler} value="-">-</button>
        <button onClick={MultiplyHandler} value="*">*</button>
        <button onClick={DivideHandler} value="/">/</button>
        <button onClick={ResultHandler}  value="=">=</button>
      </div>


    </div>
  )
}

export default App;
