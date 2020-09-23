import React, { useState } from 'react'

const HooksArray = () => {

  const [items, setItem] = useState([])

  const someFunction = () => {
    setItem([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 11)
    }])
  }

  return (
    <div>
      <button onClick={() => someFunction()}>Random number</button>
      <ul>
        {items.length ? items.map(item => <li key={item.id}>{item.value}</li>) : null}
      </ul>
    </div>
  )
}

export default HooksArray
