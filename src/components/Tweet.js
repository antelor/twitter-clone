import React from 'react';
import './Tweet.css';
import profpic from './images/blank-profile.png';

function Tweet() {
    return (
        <div className="twContainer">
            <div className="twImg">
                <img src={profpic} alt="profile"></img>
            </div>
            <div class="twContent">
                <div className="twHeader">
                    <span className="username"> testname</span>
                    <span className="userat">@testsets</span>
                    <span class="time">10m</span>
                </div>
                <div className="twText">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                </div>
                <div className="twFooter">
                    <i class="far fa-comments"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-share"></i>
                </div>
            </div>
        </div>
    )
}

export default Tweet