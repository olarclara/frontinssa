import React, { Component } from 'react'

class TalkItem extends Component {
    render() {
        return (
            <div>
                <h2>Parada #{this.props.talk.id}</h2>
                <h2>{this.props.talk.title} ({this.props.talk.start} - {this.props.talk.end})</h2>
                <small>{ this.props.talk.speaker ? this.props.talk.speaker : 'Staff'}</small>
                <p>{this.props.talk.description}</p>
                <hr />
            </div>
        )
    }
}

export default TalkItem


