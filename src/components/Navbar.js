import React from 'react'
import './Navbar.css'
import profpic from './images/blank-profile.png';

function Navbar() {
    return (
        <div className="nav-menu">
            <ul>
                <li><a href="#" class="fa fa-twitter"></a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Bookmarks</a></li>
                <li><a href="#">Lists</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">More</a></li>
                <li class="tweetLink"><span>Tweet</span></li>
            </ul>

            <div className="userInfo">
                <div>
                    <img src={profpic} className="userImg" alt="profile"></img>
                </div>
                <div class="user">
                    <div className="username"> testname</div>
                    <div className="userat">@testsets</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
