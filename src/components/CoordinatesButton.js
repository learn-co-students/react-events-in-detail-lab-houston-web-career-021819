// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    // constructor(){
    //     super()

    // }

    findCoordinates (Xpos, Ypos){
        const positions = [Xpos, Ypos]
        this.props.onReceiveCoordinates(positions)
    }

    render (){
        return(
            <div>
                <button onClick={(event) => {
                    const Xpos = event.clientX
                    const Ypos = event.clientY
                    this.findCoordinates(Xpos, Ypos)
                }}>Button</button>
            </div>
        )
    }


}