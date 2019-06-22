// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component{
    constructor(props){
        super(props)
        this.state = {
            timesClicked : 0
        }
    }

    handleClick(){
        let timesClicked = this.state.timesClicked + 1
        this.setState({timesClicked : timesClicked})
    }

    render(){
        return(
            <button onClick={() => this.handleClick()}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker