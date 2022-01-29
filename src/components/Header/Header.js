import React from 'react';
import {Link} from "react-scroll";
import"./Header.css"
const Header = () => {
    return (
        <div className="header">
        <div className="header_left">
            <h1>Develop<span>er</span></h1>
        </div>
        <div className="header_right">
            <Link to ="home" smooth={true} duration={50}>
                <h4>Home</h4>
            </Link>
            <Link to ="aboutMe" smooth={true} duration={500}>
                <h4>About me</h4>
            </Link>
            <Link to ="skill" smooth={true} duration={500}>
                <h4>skill</h4>
            </Link>
            <Link to ="projects" smooth={true} duration={500}>
                <h4>project</h4>
            </Link>
            <Link to ="contact" smooth={true} duration={500}>
                <h4>contact</h4>
            </Link>
        </div>
        </div>
    )
}

export default Header
