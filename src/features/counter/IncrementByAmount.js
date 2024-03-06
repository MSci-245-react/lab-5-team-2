import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import incrementByAmount from './counterSlice';

export default function IncrementByAmount(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch ();
    const [incrementAmount, setIncrementAmount] = useState();

    const handleChange = (e) => {
      setIncrementAmount(Number(e.target.value));
    };

    return (
            <div>
                <input
                    type="number"
                    placeholder="Increment Amount"
                    value={incrementAmount}
                    onChange={handleChange}
                />
                <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Increment</button>
            </div>
 
    )
}