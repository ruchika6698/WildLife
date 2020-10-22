import React from "react";
import "../SCSS/Workdetails.scss";
import QuakifiedTeam from "./../Assets/QuakifiedTeam.png";
import Species from "./../Assets/Species.png";
import GlobalWork from "./../Assets/GlobalWork.png";

export default class Workdetails extends React.Component {
    state = {
    opacity: "0",
    transition: "5s all ease-in-out",
    Qualifieddiv:"translate(40%, 0%)",
    Speciesdiv:"translate(0%, 0%)",
    Globaldiv:"translate(-40%, 0%)"

  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      this.setState({ opacity: "1", transition: "5s all ease-in-out",Qualifieddiv:"translate(40%,0%)",Speciesdiv:"translate(0%, 0%)", Globaldiv:"translate(-40%, 0%)"});
    } else {
      this.setState({ opacity: "0" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
  return (
    <div className="Workdetails">
        <div className="Qualifieddiv"
            style={{
            opacity: this.state.opacity,
            transition: this.state.transition,
            transform:this.state.Qualifieddiv
            }}
          elevation={0}
        >
            <div className="workImage">
            <img
                className="workIcon"
                src={QuakifiedTeam}
                alt="First slide"
            />
            </div>
            <br/><br/>
            <div className="Team">QUALIFIED TEAM</div>
            <br/>
            <div className="Teamdetails">We have gathered a team of highly qualified animal protection experts.</div>
        </div>
        <div className="Speciesdiv"
            style={{
            opacity: this.state.opacity,
            transition: this.state.transition,
            transform:this.state.Speciesdiv
            }}
          elevation={0}
        >
            <div className="workImage">
            <img
                className="workIcon"
                src={Species}
                alt="First slide"
            />
            </div>
            <br/><br/>
            <div className="Team">PROTECTING ALL SPECIES</div>
            <br/>
            <div className="Teamdetails">Besides wild cats, we also aim to protect and save other species of wild animals.</div>
        </div>
        <div className="Globaldiv"
            style={{
            opacity: this.state.opacity,
            transition: this.state.transition,
            transform:this.state.Globaldiv
            }}
          elevation={0}
        >
            <div className="workImage">
            <img
                className="workIcon"
                src={GlobalWork}
                alt="First slide"
            />
            </div>
            <br/><br/>
            <div className="Team">GLOBAL WORK</div>
            <br/>
            <div className="Teamdetails">Our organization works globally to help rescue more endangered species.</div>
        </div>
    </div>
  );
}
}