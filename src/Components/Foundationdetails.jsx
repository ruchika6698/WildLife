import React from "react";
import "../SCSS/Foundationdetails.scss";
import CountUp from 'react-countup';

export default function Foundationdetails() {
  return (
    <div className="Foundationdetails">
    <div className="Foundationdiv">
        <div className="speciesDiv">
            <div className="Speciesnumber"><CountUp end={50} duration={15} /></div>
            <br/>
            <div className="Speciesdetail">SAVED SPECIES</div>
        </div>
        <div className="speciesDiv">
            <div className="Speciesnumber"><CountUp end={92} duration={15} /></div>
            <br/>
            <div className="Speciesdetail">TEAM MEMBERS</div>
        </div>
        <div className="speciesDiv">
            <div className="Speciesnumber"><CountUp end={340} duration={15} /></div>
            <br/>
            <div className="Speciesdetail">DAILY DONATIONS</div>
        </div>
        <div className="speciesDiv">
            <div className="Speciesnumber"><CountUp end={4} duration={15} /></div>
            <br/>
            <div className="Speciesdetail">PARTNERS</div>
        </div>
      </div>
    </div>
  );
}
