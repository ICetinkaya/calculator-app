import React, { Component } from 'react'
import ComponentOther from './ComponentOther';

export default class ClassComp extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    console.log("TESt");
  }
  render() {
    return (
     <ComponentOther >Click</ComponentOther>
    )
  }
}
