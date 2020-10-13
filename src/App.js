import React from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import Donationform from './Components/Donationform'
import Ourprojects from './Components/Ourprojects'
import Scenery from './Components/Scenery'
import Galary from './Components/Galary'
import Aboutwildlife from './Components/Aboutwildlife'
import Workdetails from './Components/Workdetails'
import Foundationdetails from './Components/Foundationdetails'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <div>
        <Navigation/>
        <Donationform/>
        <Ourprojects/>
        <Scenery/>
        <Galary/>
        <Aboutwildlife/>
        <Workdetails/>
        <Foundationdetails/>
        <Newsletter/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
