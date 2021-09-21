import React from 'react'
import './Whotofollow.css'
import profpic from './images/blank-profile.png';

function Whotofollow() {
    return (
        <div className="whotofollow">
            <div className="wtf-title">Who to follow</div>
            <ul className="wtf-list">
                <li className="wtf-user">
                    <div>
                        <img src={profpic} className="wtf-userImg" alt="profile"></img>
                    </div>
                    <div class="wtf-userinf">
                        <div className="wtf-username"> testname</div>
                        <div className="wtf-userat">@testsets</div>
                    </div>
                    <button className="wtf-follow">Follow</button>
                </li>

                <li className="wtf-user">
                    <div>
                        <img src={profpic} className="wtf-userImg" alt="profile"></img>
                    </div>
                    <div class="wtf-userinf">
                        <div className="wtf-username"> testname</div>
                        <div className="wtf-userat">@testsets</div>
                    </div>
                    <button className="wtf-follow">Follow</button>
                </li>

            </ul>
        </div>
    )
}

export default Whotofollow
