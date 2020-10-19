import React from "react";
import "../SCSS/Aboutwildlife.scss";
import Button from "react-bootstrap/Button";
import About from "./../Assets/About.jpg";

export default function Aboutwildlife() {
  return (
    <div className="Aboutwildlife">
        <div className="AboutDiv">
            <img
                className="About"
                src={About}
                alt="About"
            />
        </div>
        <div className="AboutDiv">
            <div className="Transparentdiv1"></div>
            <div className="aboutUs">ABOUT US</div>
            <div className="about">About Wildlife</div>
            <br/>
            <div className="AboutInfo">Wildlife is devoted to the conservation of the world’s wild cats and dozens of other endangered species.</div>
            <br/>
            <div className="AboutInfo">Our team of leading biologists and law enforcement experts develop innovative strategies to address the dire threats facing the wild animals globally.
            <br/><br/>
            <div><Button className="Read">READ MORE</Button></div>
</div>
        </div>
    </div>
  );
}
