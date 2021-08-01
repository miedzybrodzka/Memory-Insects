import React, {Component} from 'react';

export class ActionButton extends Component {
    render() {
        return (
            <button className = {this.props.className} onClick = {this.props.action} id = {this.props.id} name = {this.props.name} disabled = {this.props.disabled}>{this.props.content}</button>
        )
    }
}