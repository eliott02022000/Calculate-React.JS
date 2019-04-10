import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

export default class PasCalculator extends Component {
    render() {
        return (
            <span> Je ne suis pas la calculette
                <NavLink to = {'/calculator'}>
                    Go to calculator
                </NavLink>
            </span>
        )
    }
}