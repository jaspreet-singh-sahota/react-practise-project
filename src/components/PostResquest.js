import React, { Component } from 'react'
import axios from "axios";

export class PostResquest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      body: ''
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { idValue, titleValue, bodyValue } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="id">Id</label>
          <input type="text" name="id" value={idValue} onChange={this.changeHandler} />
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={titleValue} onChange={this.changeHandler} />
          <label htmlFor="body">Body</label>
          <input type="text" name="body" value={bodyValue} onChange={this.changeHandler} />
          <button>Submit</button>
        </form>

      </div>
    )
  }
}

export default PostResquest
