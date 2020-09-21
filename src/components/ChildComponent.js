import React from 'react'

function ChildComponent({ clickHandler}) {
  return (
    <div>
      <button onClick={() => clickHandler('child')}>Click me</button>
    </div>
  )
}

export default ChildComponent
