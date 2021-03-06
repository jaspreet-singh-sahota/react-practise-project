import React, { Component } from 'react'

class Count extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>increment</button>
      </div>
    )
  }
}

export default Count
