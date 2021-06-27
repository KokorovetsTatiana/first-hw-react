import React, { Component } from "react";
import Profile from "../../App";
import user from "./user.json";

export default class Task_1 extends Component {
    render() {
    return(
        <div>
            <Profile
                avatar={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
            </div>
    )
    }
}
