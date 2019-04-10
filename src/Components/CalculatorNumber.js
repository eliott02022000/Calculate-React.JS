import React, {Component} from 'react';

export default class CalulatorNumber extends Component {
    render () {
        return(<td onClick = {() => {
            this.props.handlenumber(this.props.number)
        }}>
            {this.props.number}
           
        </td>)
    }
}