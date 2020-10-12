import React from "react";
import "../SCSS/Scenery.scss";
import Button from "react-bootstrap/Button";

export default function Scenery() {
  return (
    <div className="Scenery">
    <div className="Textdiv">
      <div className="Boldtext"> IT'S </div>
      <div className="time">TIME</div>
      <div className="Boldtext">TO ACT</div>
      </div>
      <br/>
      <div><Button className="Read">READ MORE</Button></div>
    </div>
  );
}
