import React, {Component} from 'react'

class Welcome extends Component {
  render() {
    return (
  <h2>Hello {this.props.name} a.k.a {this.props.heroName} {this.props.children}</h2>
    )
  }
}

export default Welcome