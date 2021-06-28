import React, { Component } from "react";
import FriendList from './friendList.js';
import friends from './friends.json';

export default class Task_3 extends Component {
    render() {
        return (
            <div className="center" id="task3">
                <FriendList friends={friends} />
            </div>
        )
    }
}