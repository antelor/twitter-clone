import React from 'react'
import Searchbar from './Searchbar';
import Whotofollow from './Whotofollow';
import './Rightbar.css';

function Rightbar() {
    return (
        <div class="rightbar">
            <Searchbar />
            <Whotofollow />
        </div>
    )
}

export default Rightbar
