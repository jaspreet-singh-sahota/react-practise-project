import React from 'react'

class Subscribe extends React.Component {
  constructor() {
    super()

    this.state = {
      message: 'Click button to subscribe'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing'
    })
  }

  render() {
    const {message} = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.changeMessage()}>Click</button>
      </div>
    )
  }
}

export default Subscribe