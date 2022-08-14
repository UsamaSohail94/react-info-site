import React, {useState} from "react";
{/*import Employee from "./Employee"*/}
import Message from "./Message"
import "./App.css"

function App() {
    let [count, setCount] = useState(0)
    let [isMorning, setMorning] = useState(false)
  return (
    <div className= {`box ${isMorning ? 'Morning' : ''}`}>
      {/*<h1>Employee Data</h1>
      <Employee Name="Muhammad Amjad" JobTitle="Taxonomy Engineer"/>
      <hr/>
      <Employee Name="Faraz sid" JobTitle="Senior Taxonomy Engineer"/> 
  <hr/>*/}
      <h1>Counter App</h1>
      <h2>Good {isMorning ? 'Morning' : 'Night'}</h2>
      <Message count= {count}/>
      <br />
      <button 
        onClick={()=> setCount(++count)}
      >
        Click to increament
      </button>
      <button 
        onClick={()=> setCount(--count)}
      >
        Click to decrement
      </button>
      <br / >
        <button onClick={()=> setMorning(!isMorning)}>
          Day Toggle
        </button>
    </div>
  );
}

export default App;
