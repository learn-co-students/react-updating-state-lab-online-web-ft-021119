// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    updatingState = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
        // console.log(this.state.timesClicked);
    }

    render() {
        return (
        <div>
            <button onClick={this.updatingState}>{this.state.timesClicked}</button>
        </div>
        )
    }
}
