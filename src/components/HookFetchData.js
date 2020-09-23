import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const HookFetchData = () => {
  const [post, setPost] = useState({})
  const [id , setId] = useState(1)
  const [idFromButton, setIdFromButton] = useState(id)

  const idHandler = (e) => {
    setId(e.target.value)
  }

  const buttonHandler = () => {
    setIdFromButton(id)
  }

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then(response => {
        console.log(response)
        setPost(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [idFromButton])

  return (
    <div>
      <input type="text" value={id} onChange={idHandler}/>
      <button onClick={buttonHandler}>Click here</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul> */}
    </div>
  )
}

export default HookFetchData
