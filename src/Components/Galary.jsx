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
            <div className="Animal1"><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal2"><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal3"><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal4"><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
        </div>
        <br/>
        <div className="Galary1">
            <div className="Animal5"><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal6"><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal7"><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal8"><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
        </div>
        <br/><br/>
    </div>
    </div>
  );
}
