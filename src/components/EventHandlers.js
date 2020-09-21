import React, { Component } from 'react'

export class EventHandlers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Good Bye'
  //   })
  //   console.log('Good Bye')
  // }

  clickHandler = () => {
    this.setState({
      message: 'Good Bye'
    })
  } 
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={() => this.clickHandler()}>Click me</button> */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
        {/* <button onClick={this.clickHandler}>Click me</button> */}
        <button onClick={() => this.clickHandler()}>Click me</button>
      </div>
    )
  }
}

export default EventHandlers

