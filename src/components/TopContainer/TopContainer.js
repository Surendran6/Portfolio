import React from 'react';
import {Element} from "react-scroll";
import TopContent from './TopContent/TopContent';
import "./TopContainer.css";
const TopContainer = () => {
    return (
        <div>
            <Element name="home" className="topContainer">
               <TopContent/>
            </Element>
        </div>
    )
}

export default TopContainer
