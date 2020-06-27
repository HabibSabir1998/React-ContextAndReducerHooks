import React from 'react';
import { Value } from './Value';
import {ValueReducer} from './ValueReducer'

export const Parent = () => {
    return (
        <div>
            <Value />
            <ValueReducer />
        </div>
    )
}
