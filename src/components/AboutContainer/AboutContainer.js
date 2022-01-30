import React from "react";
import { Element } from "react-scroll";
import suren from "../../assests/surendran.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./AboutContainer.css";
import Button from "react-bootstrap/Button";
import { Bounce, Fade, Rotate ,Slide } from "react-awesome-reveal";




const AboutContainer = () => {
  return (
    <Element name="aboutMe" className="base_container gridContainer">  
      <Slide>
      <div className="content_Container">
        <h1 className="title">About Me</h1>
          I'm a passionate Full stack developer with the goal of working on a
          project that solves problems with thoughtful UI design, creating
          intuitive, dynamic user experiences powered by strong backend. My core
          competency lies in developing applications from its inception. I
          primarily work with MERN stack among the full stack technologies. The
          satisfaction that I get while working and completing every project
          made me do more and more.
          <div className="button_container">
            <a
              href={
                "https://drive.google.com/file/d/1WBoiPLv8d5rQu_EffxgjQjOqrHG1MA6A/view"
              }
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button
                variant="outline-dark"
                className="a"
              >
                <FontAwesomeIcon className="dark" size="lg" icon={faFile} />{" "}
                View Resume
              </Button>
            </a>
          </div>
        </div>
      </Slide>
      <Slide right >
      <div className="aboutContainer_image">
          <img src={suren} alt="" />
        </div>
      </Slide >
    </Element>
  );
};

export default AboutContainer;
