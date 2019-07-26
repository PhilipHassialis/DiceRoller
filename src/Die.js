import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
    static defaultProps = {
        diceClasses: ["fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six"],
        dieNumber: 3
    };

    render() {
        let shakingClass = this.props.isRolling ? "shaking" : " ";
        return (
            <span>
                <i className={`Die fas ${this.props.diceClasses[this.props.dieNumber]} ${shakingClass}`} />
            </span>
        );
    }
}
