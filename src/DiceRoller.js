import React, { Component } from "react";
import Die from "./Die";
import "./DiceRoller.css";

export default class DiceRoller extends Component {
    state = { die1: 1, die2: 1, isRolling: false };

    roll = e => {
        const newDie1 = Math.floor(Math.random() * 6);
        const newDie2 = Math.floor(Math.random() * 6);
        this.setState({ die1: newDie1, die2: newDie2, isRolling: true });
        setTimeout(() => this.setState({ isRolling: false }), 1000);
    };

    render() {
        return (
            <div className="DiceRoller">
                <h1>Dice roller</h1>
                <div className="DiceRoller-container">
                    <Die dieNumber={this.state.die1} isRolling={this.state.isRolling} />
                    <Die dieNumber={this.state.die2} isRolling={this.state.isRolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling" : "Roll dice!"}
                </button>
            </div>
        );
    }
}
