// Code DelayedButton Component Here

import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    // constructor(){
    //     super()
    // }

    render (){
        return(
            <div>
                <button onClick={ (event) =>{
                    event.persist()
                    const eventData = event
                    setTimeout( () => this.props.onDelayedClick(eventData), this.props.delay )
                }}>Button</button>
            </div>
        )
    }

}