// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    
   positions = (e) =>{
     console.log(this.props.onReceiveCoordinates([e.clientX, e.clientY]))  
   } 

   render(){
       return(
           <button onClick = {this.positions}/>
       )
   }
}