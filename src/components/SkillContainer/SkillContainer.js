import React from "react";
import { Element } from "react-scroll";
import skill from "../../assests/first1.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./SkillContainer.css";
import { Slide } from "react-awesome-reveal";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" name="skill">
      <Slide>
        <div className="skillContainer_image">
          <img src={skill} alt="" />
        </div>
        <div className="skillContainer_text">
          <h2 className="skill_title">SKILLSET</h2>
          <div className="skillContainer_skillset">
            <h5>React</h5>
            <div className="skillContainer_slider1 align_slider">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>Nodejs</h5>
            <div className="skillContainer_slider2 align_slider" >
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>Mongodb</h5>
            <div className="skillContainer_slider3 align_slider">
              <LinearProgress variant="determinate" value={70} />
            </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>Express</h5>
            <div className="skillContainer_slider4 align_slider">
              <LinearProgress variant="determinate" value={65} />
            </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>Javascript</h5>
            <div className="skillContainer_slider1 align_slider">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>HTML</h5>
            <div className="skillContainer_slider2 align_slider">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div> <div className="skillContainer_skillset">
            <h5>CSS</h5>
            <div className="skillContainer_slider3 align_slider">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>Git</h5>
            <div className="skillContainer_slider4 align_slider">
              <LinearProgress variant="determinate" value={75} />
            </div>
          </div>
        </div>
      </Slide>
    </Element>
  );
};

export default SkillContainer;
