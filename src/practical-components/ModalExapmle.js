import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalExapmle = () => {
  const [boolean,  setBoolean] = useState(false)

  // useEffect(() => {
  //   setBoolean(!boolean)
  // }, [boolean])
  return (
    <div>
      <button onClick={() => setBoolean(true)}>Click here</button>
      <Modal isOpen={boolean} onRequestClose={() => setBoolean(false)} style={{overlay:{backgroundColor: 'gray'}, content: {
        color: 'orange'
      }}}>
        <h1>Title</h1>
        <p>Body</p>
        <button onClick={() => setBoolean(false)}>Close</button>
      </Modal>
    </div>
  )
}

export default ModalExapmle
