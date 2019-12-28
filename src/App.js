import React from 'react';
import logo from './logo.svg';
import './App.css';
import DoughnutChart from './view/Doughnut Chart';
import SplineChart from './view/spline';
import Distance from './view/distance';

function App() {
	
	  
	  
  return (
    <div className="App">
	<div>
	<div> <SplineChart/></div>
     <div> <DoughnutChart/></div>
	
	 <Distance/>
	 </div>
    </div>
  );
}

export default App;
