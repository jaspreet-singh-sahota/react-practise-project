import React, { Component } from 'react'

class Count extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  // increment() {
  //   this.setState({
  //     count: this.state.count + 1
  //   }, () => console.log(this.state))
  //   console.log(this.state)
  // }

  increment() {
    this.setState((previous) => ({count: previous.count + 1}))
  }

  incrementByFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementByFive()}>increment</button>
      </div>
    )
  }
}

export default Count
