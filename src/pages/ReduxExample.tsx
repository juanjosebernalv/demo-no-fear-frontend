import React from 'react';
import type { RootState } from '../app/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

export const ReduxExample = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="bg-secondary">
        <button
          className="bg-primary text-white"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          type="button"
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="bg-primary text-white"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          type="button"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
