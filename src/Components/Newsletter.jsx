import React from "react";
import "../SCSS/Newsletter.scss";
import Button from "react-bootstrap/Button";

export default function Newsletter() {
  return (
    <div className="Newsletter">
    <div>
        <div className="Newslettertext">NEWSLETTER</div>
        <div className="Newsletterdata">Join Our Newsletter</div>
    </div>
        <br/>
        <div className="Subscription">
            <div><input type="text" className="Emailtext" PlaceHolder="Email"></input></div>
            <div><Button className="Subscribebutton">SUBSCRIBE</Button></div>
        </div>
    </div>
  );
}
