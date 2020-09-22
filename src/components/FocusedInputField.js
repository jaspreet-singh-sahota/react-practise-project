import React, { Component } from 'react'

class FocusedInputField extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
    this.inputOld = null
    this.setInputOld = element => {
      this.inputOld = element
    } 
  }

  componentDidMount() {
    if(this.inputOld) {
      this.inputOld.focus()
    }
    // this.inputRef.current.focus()
    console.log(this.inputRef)
  }
  
  render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputRef}></input> */}
        <input type="text" ref={this.setInputOld}></input>
        
      </div>
    )
  }
}

export default FocusedInputField
