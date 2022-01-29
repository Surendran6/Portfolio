import React from 'react';
import {Link} from 'react-scroll';
import'./TopContent.css'
const TopContent = () => {
    return (
        <div className="topContent">
            <div className="topContent_container">
                <h1>Mr Surendran S</h1>
                <p>A professional fullstack developer</p>
                <a href="www.google.com">
                    <button className="topContent_downloadButton">Download cv</button>
                </a>
                <Link to ="projects" smooth={true} duration={500}>
                    <button className="topContent_workButton">my works</button>
                </Link>
            </div>            
        </div>
    )
}

export default TopContent
