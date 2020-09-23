import React, { useState, useEffect } from 'react'

const HookMouse = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('yo')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('hello')
    window.addEventListener('mousemove', logMousePosition)
    
    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  return (
    <div>
      coordinates:- X: {x} & Y: {y}
    </div>
  )
}

export default HookMouse
