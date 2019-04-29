// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

    handleClick = (event)=> {
        console.log([event.clientX, event.clientY])
        this.props.onReceiveCoordinates ([event.clientX, event.clientY])
    }
    render(){
        return(
            <div>
                <button onClick = {this.handleClick}>Coordinates Button</button>
            </div>
        )
    }
}