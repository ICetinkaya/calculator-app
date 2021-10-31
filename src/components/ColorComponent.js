import React, { Component } from 'react'

export default class ColorComponent extends Component {
    constructor(props){
        super(props);
        this.state ={color : "red"};
    }
    
    componentDidMount(){
        setTimeout( () =>{
            this.setState({color : "green"})
        },2000)
    }
    handleClick = () =>{
        this.setState(
            {color : "blue"}
        );
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML = "Before the update " + prevState.color;
        return null;
    }
  /*  componentDidUpdate(){
        document.getElementById("div2").innerHTML ="The updated color is" + this.state.color;
    }*/
    render() {
        return (
            <div>
                <h1> Color {this.state.color}</h1>
                <div id="div1"> </div>
                <div id="div2"> </div>
            </div>
        )
    }
}
