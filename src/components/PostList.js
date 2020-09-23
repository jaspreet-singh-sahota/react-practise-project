import React, { Component } from 'react'
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      error: ''
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
        this.setState({
          posts: response.data,
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({error: "Error retrieving data"})
      })
  }

  render() {
    const { posts, error } = this.state
    return (
      <div>
        { posts.length ?
          posts.map(post => (<h1 key={post.id}>{post.title}</h1>)) :
          null
        }
        {error ? <h1>{error}</h1> : null}
      </div>
    )
  }
}

export default PostList
