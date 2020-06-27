import React, {useReducer} from 'react';

import counterReducer from './CounterReducer';

export const ValueReducer = () => {

    let [state, dispatch] = useReducer(counterReducer,1)

    return (
        <div>
            <h1>This is a Value from reducer</h1>
            <h2>Value of Reducer is: {state}</h2>
            <button onClick={() => dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}
