import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment} from './counterSlice';

export default function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch ();
    const setIncrementAmount = useState();

    const handleChange = (e) => {
      setIncrementAmount(Number(e.target.value));
    };

    return (
        <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(decrement())}
                >
                    decrement
                </button>

        </div>
    )
}