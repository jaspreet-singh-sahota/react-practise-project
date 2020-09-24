import React, { useState, useEffect, useRef } from 'react'

const UseRefTick = () => {
  const [count, setCount] = useState(0)
  const stopCount = useRef()

  useEffect(() => {
   stopCount.current = setInterval(() => {
      setCount(pre => pre + 1)
    }, 1000)
    return () => {
      clearInterval(stopCount.current)
    }
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(stopCount.current)}>Stop Timer</button>
    </div>
  )
}

export default UseRefTick
