import React, { Component } from 'react'

class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'jassi'
    }
    console.log('constructor B')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps B')
    return null
  }

  componentDidMount() {
    console.log('componentDidMount B')
  }

  render() {
    console.log('render B')
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleA
