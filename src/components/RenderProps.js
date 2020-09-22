import React, { Component } from 'react'

class RenderProps extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount() {
    this.setState((previous) => ({ count: previous.count + 1 }))
  } 
  
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default RenderProps
