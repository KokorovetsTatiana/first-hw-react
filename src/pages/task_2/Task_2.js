import React, { Component } from "react";
import Statistics from './statistics';
import statisticalData from './statistical-data.json';

export default class Task_2 extends Component {
    render() {
        return (
            <div>
                <Statistics title="Upload stats" stats={statisticalData} />
                <Statistics stats={statisticalData} />
            </div>
        )
    }
}