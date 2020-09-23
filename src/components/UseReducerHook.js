import React, { useReducer } from 'react'

const initialState = {
  firstValue: 0,
  secondValue: 0
}
const reducer = (state = initialState , action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstValue: state.firstValue + action.value}
    case "decrement":
      return {...state, secondValue: state.secondValue + action.value}
    case "reset":
      return initialState
  
    default: return state
  }
}

const UseReducerHook = () => {

  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>Count:- {count.firstValue}</div>
      <div>Count:- {count.secondValue}</div>
      <button onClick={() => dispatch({type:'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type:'decrement', value: 1})}>Decrement</button>
      <button onClick={() => dispatch({type:'increment', value: 5})}>Increment 5</button>
      <button onClick={() => dispatch({type:'decrement', value: 5})}>Decrement 5</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerHook
