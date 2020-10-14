import React from "react";
import "../SCSS/Galary.scss";
import Button from "react-bootstrap/Button";

export default function Galary() {
  return (
    <div className="Galary">
     <div>
        <div className="Galarytext">GALLERY</div>
        <div className="Savedanimal">Saved Animals</div>
        <br/>
        <div className="textInfo">In our gallery, you can take a look at the photos of wild cats and other</div>
        <div className="textInfo">animals that we’ve rescued and helped since our first day.</div>
        <br/><br/>
        <div className="Galary1">
            <div className="Animal1"><Button className="Zoom">Zoom</Button></div>
            <div className="Animal2"><Button className="Zoom">Zoom</Button></div>
            <div className="Animal3"><Button className="Zoom">Zoom</Button></div>
            <div className="Animal4"><Button className="Zoom">Zoom</Button></div>
        </div>
        <br/>
        <div className="Galary1">
            <div className="Animal5"><Button className="Zoom">Zoom</Button></div>
            <div className="Animal6"><Button className="Zoom">Zoom</Button></div>
            <div className="Animal7"><Button className="Zoom">Zoom</Button></div>
            <div className="Animal8"><Button className="Zoom">Zoom</Button></div>
        </div>
        <br/><br/>
    </div>
    </div>
  );
}
