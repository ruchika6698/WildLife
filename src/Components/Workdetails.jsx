import React from "react";
import "../SCSS/Workdetails.scss";
import QuakifiedTeam from "./../Assets/QuakifiedTeam.png";
import Species from "./../Assets/Species.png";
import GlobalWork from "./../Assets/GlobalWork.png";

export default function Workdetails() {
  return (
    <div className="Workdetails">
        <div className="Workdiv">
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
        <div className="Workdiv">
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
        <div className="Workdiv">
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
