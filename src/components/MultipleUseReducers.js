import React, { useReducer } from 'react'

const initialState = {
  firstValue: 0,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {...state, firstValue: state.firstValue + action.value}
    case "decrement":
      return { ...state, firstValue: state.firstValue - action.value }
    case "reset":
      return initialState

    default: return state
  }
}

const MultipleUseReducers = () => {

  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
      <div>Count:- {count.firstValue}</div>
      <button onClick={() => dispatch({type:'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type:'decrement', value: 1})}>Decrement</button>
      <button onClick={() => dispatch({type:'reset', value: 1})}>Reset</button>
      <div>Count:- {countTwo.firstValue}</div>
      <button onClick={() => dispatchTwo({type:'increment', value: 5})}>Increment</button>
      <button onClick={() => dispatchTwo({type:'decrement', value: 5})}>Decrement</button>
      <button onClick={() => dispatchTwo({type:'reset', value: 1})}>Reset</button>
    </div>
  )
}

export default MultipleUseReducers
