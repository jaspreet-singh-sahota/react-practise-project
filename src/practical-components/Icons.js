import React from 'react'
import { IconContext } from 'react-icons'
import { FaAirbnb } from "react-icons/fa";
import { GiBullyMinion } from "react-icons/gi";

const Icons = () => {
  return (
    <IconContext.Provider value={{color:'yellow' , size: '10em'}}>
      <div>
        <FaAirbnb color="purple" size='10em' />
        <GiBullyMinion />
      </div>
    </IconContext.Provider>
  )
}

export default Icons
