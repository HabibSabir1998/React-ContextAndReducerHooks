import React, {useContext} from 'react';

import counterContext from './CounterContext'

export const Value = () => {
  let counterValue = useContext(counterContext)
  // console.log(counterValue)
    return (
        <>
        <h1>This is a Counter Context Component</h1>
        <h4>Counter Value is :{counterValue[0]}</h4>
        <button onClick={() => counterValue[1](++counterValue[0]) }>Increment</button>
        </>

        
    )
}
