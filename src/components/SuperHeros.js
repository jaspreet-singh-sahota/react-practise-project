import React from 'react'

const SuperHeros = ({ superHero }) => {
  if (superHero === 'Joker') {
    throw new Error('Not a hero')
  }
  return (
    <div>
      <h1>{superHero}</h1>
    </div>
  )
}

export default SuperHeros
