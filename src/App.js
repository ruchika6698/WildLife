import React from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import Donationform from './Components/Donationform'
import Ourprojects from './Components/Ourprojects'

function App() {
  return (
    <div>
      <div>
        <Navigation/>
        <Donationform/>
        <Ourprojects/>
      </div>
    </div>
  );
}

export default App;
