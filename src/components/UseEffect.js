import React, { useState, useEffect } from 'react'

const UseEffect1 = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('hello')
    document.title = `You have Clicked ${count} times`
  }, [count])


  return (
    <div>
      <input type="text" name={name} onChange={(e) => setName({name: e.target.value})}/>
      <button onClick={() => setCount(previousCount => previousCount + 1)}>Click here</button>
    </div>
  )
}

export default UseEffect1
