import React, { Component } from 'react'
import MakeList from './MakeList'

class Schedule extends Component {
    render() {
        return (
            <MakeList items={this.props.schedule} />
        )
    }
}

export default Schedule



