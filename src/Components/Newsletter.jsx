import React from "react";
import "../SCSS/Newsletter.scss";
import Button from "react-bootstrap/Button";

export default class Newsletter extends React.Component {
  state = {
    opacity: "0",
    transition: "5s all",
    transform: "translate(-0%, -10%)",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 3500) {
      this.setState({
        opacity: "1",
        transition: "5s all ease-in-out",
      });
    } else {
      this.setState({ opacity: "0" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className="Newsletter">
        <div>
          <div
            className="Newslettertext"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            NEWSLETTER
          </div>
          <div
            className="Newsletterdata"
            style={{
              opacity: this.state.opacity,
              transition: this.state.transition,
            }}
            elevation={0}
          >
            Join Our Newsletter
          </div>
        </div>
        <br />
        <div className="Subscription">
          <div>
            <input
              type="text"
              className="Emailtext"
              PlaceHolder="Email"
              style={{
                opacity: this.state.opacity,
                transition: this.state.transition,
              }}
              elevation={0}
            ></input>
          </div>
          <div>
            <Button
              className="Subscribebutton"
              style={{
                opacity: this.state.opacity,
                transition: this.state.transition,
              }}
              elevation={0}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
