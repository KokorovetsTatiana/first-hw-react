import React from "react";
import PropTypes from "prop-types";

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    // stats: PropTypes.number, 
}

export default function Profile({
    avatar,
    name,
    tag,
    location,
    followers,
    views,
    likes
}){
        return (
            <div className="profile" id="task1">
                <div className="description">
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className="avatar"
                    />
                    <p className="name">{name}</p>
                    <p className="tag">{tag}</p>
                    <p className="location">{location}</p>
                </div>
                <ul className="stats">
                    <li>
                        <span className="label">Followers</span>
                        <span className="quantity">{followers}</span>
                    </li>
                    <li>
                    <span className="label">Views</span>
                        <span className="quantity">{views}</span>
                    </li>
                    <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                    </li>
                </ul>
                </div>
        )}
