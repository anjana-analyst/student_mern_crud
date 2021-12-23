import React, { Component } from 'react';

export default class StudentTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.branch}</td>
                <td>{this.props.obj.rollnow}</td>
            </tr>
        );
    }
}