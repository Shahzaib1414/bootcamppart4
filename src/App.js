import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js';
function App() {
  let [count, setCount] = useState(1);
  let [isday, setday] = useState(true);
  return (
    <div className= {`box ${isday ? 'daylight' : ' '}`}>
      <h1>Day time = {isday ? 'Morning' : 'Night'}</h1>
      <Message counter={count}/>
     <button onClick={()=> setCount(++count)}> Update count</button>
     <button onClick={()=> setday(!isday)}> Update day</button>
    </div>
  );
}

export default App;
