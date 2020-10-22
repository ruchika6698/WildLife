import React from "react";
import "../SCSS/Galary.scss";
import Button from "react-bootstrap/Button";

export default class Galary extends React.Component{
  state = {
    opacity: "0",
    transition: "6s all ease-in-out",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 880) {
      this.setState({ opacity: "1", transition: "6s all ease-in-out" });
    } else {
      this.setState({ opacity: "0" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

 render() {
  return (
    <div className="Galary">
     <div>
        <div className="Galarytext" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}>GALLERY</div>
        <div className="Savedanimal" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}>Saved Animals</div>
        <br/>
        <div className="textInfo" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}>In our gallery, you can take a look at the photos of wild cats and other</div>
        <div className="textInfo" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}>animals that we’ve rescued and helped since our first day.</div>
        <br/><br/>
        <div className="Galary1">
            <div className="Animal1" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal2" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal3" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal4" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
        </div>
        <br/>
        <div className="Galary1">
            <div className="Animal5" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal6" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal7" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
            <div className="Animal8" style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}><div className="Zoombutton"><Button className="Zoom">Zoom</Button></div></div>
        </div>
        <br/><br/>
    </div>
    </div>
  );
}
}