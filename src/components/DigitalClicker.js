import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    incrementButton = () => {
        let incrementClicks = this.state.timesClicked
        incrementClicks ++;
        this.setState( { timesClicked : incrementClicks } );
        }
    

    render() {
        return(
           <button onClick={this.incrementButton}>{this.state.timesClicked}</button> 
        )
    }
}