import React, { useState } from 'react'

const CountHooks2 = () => {
  const initialCount = 0
  const [count , setCount ] = useState(initialCount)

  const incrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount(previousCount => previousCount + 1)
      
    }
  }

  return (
    <div>
      count:- {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count => count +1)}>Increment</button>
      <button onClick={() => setCount(count => count -1)}>Decrement</button>
      <button onClick={() => incrementBy5()}>Increment by 5</button>
    </div>
  )
}

export default CountHooks2
