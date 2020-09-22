import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'jassi'
    }
    console.log('constructor A')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps A')
    return null
  }

  componentDidMount() {
    console.log('componentDidMount A')
  }
  
  render() {
    console.log('render A')
    return (
      <div>
        LifeCycle A
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA
