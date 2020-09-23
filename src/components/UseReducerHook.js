import React, { useReducer } from 'react'

const initialState = {
  firstValue: 0,
  secondValue: 0
}
const reducer = (state = initialState , action) => {
  switch (action) {
    case "increment":
      return state += 1
    case "decrement":
      return state -= 1
    case "reset":
      return state = 0
  
    default: return state
  }
}

const UseReducerHook = () => {

  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>Count:- {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerHook
