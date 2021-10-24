import React, { Component } from 'react'

export default class StaticProp extends Component {

  static defaultProps ={
    name : 'Ibrahim'
  }
  render() {
    return (
      <div>
          {this.props.name}
      </div>
    )
  }
}
