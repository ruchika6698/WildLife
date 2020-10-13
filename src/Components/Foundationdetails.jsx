import React from "react";
import "../SCSS/Foundationdetails.scss";

export default function Foundationdetails() {
  return (
    <div className="Foundationdetails">
    <div className="Foundationdiv">
        <div className="speciesDiv">
            <div className="Speciesnumber">50</div>
            <br/>
            <div className="Speciesdetail">SAVED SPECIES</div>
        </div>
        <div className="speciesDiv">
            <div className="Speciesnumber">92</div>
            <br/>
            <div className="Speciesdetail">TEAM MEMBERS</div>
        </div>
        <div className="speciesDiv">
            <div className="Speciesnumber">340</div>
            <br/>
            <div className="Speciesdetail">DAILY DONATIONS</div>
        </div>
        <div className="speciesDiv">
            <div className="Speciesnumber">4</div>
            <br/>
            <div className="Speciesdetail">PARTNERS</div>
        </div>
      </div>
    </div>
  );
}
