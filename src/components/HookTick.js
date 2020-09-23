import React, { useState, useEffect } from 'react'

const HookTick = () => {
  const [count , setCount] = useState(0)

  const tick = () => {
    setCount(previousCount => previousCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])


  return (
    <div>
      {count}
    </div>
  )
}

export default HookTick
