import React, { Component, Children } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parent: 'parent'
    }
    
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(ChildName = '') {
    alert(`hello ${this.state.parent} from ${ChildName}`)
  }
  
  render() {
    return (
      <div>
        <ChildComponent clickHandler={this.clickHandler}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
