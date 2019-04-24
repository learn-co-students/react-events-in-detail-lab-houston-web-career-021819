// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    delayBy = (event) =>{
      //const event = e.target
      event.persist();
      setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    //setTimeout(this.delayBy, this.props.delay)

    render(){
        //console.log(this.props.delay)
        return(
           <button onClick = {this.delayBy}/>
        )
    }
}