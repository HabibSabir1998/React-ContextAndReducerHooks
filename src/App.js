import React, { useState } from 'react';
import './App.css';
import {Parent} from './Components/Parent.js';
import CounterContext from './Components/CounterContext'

const App = () => {
  let countState = useState(1) // [count, setCount]
    return (
        <CounterContext.Provider value={countState}>
        <div className="container">
          <Parent />
        </div>
      </CounterContext.Provider>
    );
  }
  


export default App;




