import React from "react";
import "../SCSS/Ourprojects.scss";
import Button from "react-bootstrap/Button";

export default function Ourprojects() {
  return (
    <div className="Ourprojects">
      <div>
        <div className="projectText">OUR PROJECTS</div>
        <div className="Message">Help Animals Worldwide</div>
        <br/>
        <div className="Textinfo">Below are some of our recent charity projects that helped us</div>
        <div className="Textinfo">protect wild cat species and save them from from retaliatory</div>
        <div className="Textinfo">killings in 28 countries.</div>
      </div>
      <br/>
      <br/>
      <div className="Imagediv">
      <div>
        <div className="LionImage">
            <Button className="Donatebutton">DONATE</Button>
        </div>
        <br/>
        <div className="Animalname">
            LIONS
        </div>
        <br/>
        <div className="amount">
            $340K DONATED
        </div>
     </div>
     <div>
        <div className="CheetahsImage">
            <Button className="Donatebutton">DONATE</Button>
        </div>
        <br/>
        <div className="Animalname">
            CHEETAHS
        </div>
        <br/>
        <div className="amount">
            $550K DONATED
        </div>
    </div>

    <div>
        <div className="CubsImage">
            <Button className="Donatebutton">DONATE</Button>
        </div>
        <br/>
        <div className="Animalname">
            TIGER CUBS
        </div>
        <br/>
        <div className="amount">
           $610K DONATED
        </div>
      </div>
    </div>
    </div>
  );
}
