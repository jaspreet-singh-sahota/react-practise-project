import React, { useState, useEffect } from 'react'

const UseEffect1 = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You have Clicked ${count} times`
  })


  return (
    <div>
      <button onClick={() => setCount(previousCount => previousCount + 1)}>Click here</button>
    </div>
  )
}

export default UseEffect1
