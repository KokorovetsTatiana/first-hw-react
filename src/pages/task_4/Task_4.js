import React, { Component } from "react";
import TransactionHistory from './TransactionHistory.js';
import transactions from './transactions.json';

export default class Task_4 extends Component {
    render() {
        return (
            <div className="center" id="task4">
                <TransactionHistory items={transactions} />
            </div>
        )
    }
}