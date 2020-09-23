import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const HookFetchData = () => {
  const [posts, setPost] = useState([])

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
      console.log(response)
      setPost(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default HookFetchData
