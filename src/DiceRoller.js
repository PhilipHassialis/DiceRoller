import React, { Component } from "react";
import Die from "./Die";

export default class DiceRoller extends Component {
    state = { die1: 1, die2: 1 };

    roll = e => {
        const newDie1 = Math.floor(Math.random() * 6);
        const newDie2 = Math.floor(Math.random() * 6);
        this.setState({ die1: newDie1, die2: newDie2 });
    };

    render() {
        return (
            <div>
                <h1>Dice roller</h1>
                <Die dieNumber={this.state.die1} />
                <Die dieNumber={this.state.die2} />
                <button onClick={this.roll}>Roll dice!</button>
            </div>
        );
    }
}
