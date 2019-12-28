import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class SplineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: "daily speed graph"
			},
			
				 axisX:{
       
        valueFormatString:  "hh:mm TT"   // move comma to change formatting
     
			},
			axisY: {
				title: "speed in km",
				
				includeZero: false
			},
			data: [{
			
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25 },
					{ x: new Date(2017, 1), y: 27 },
					{ x: new Date(2017, 2), y: 42 },
					{ x: new Date(2017, 3), y: 32 },
					{ x: new Date(2017, 4), y: 35 },
					{ x: new Date(2017, 5), y: 33},
					{ x: new Date(2017, 6), y: 40 },
					{ x: new Date(2017, 7), y: 52 },
					{ x: new Date(2017, 8), y: 32 },
					{ x: new Date(2017, 9), y: 42},
					{ x: new Date(2017, 10), y: 37 },
					{ x: new Date(2017, 11), y: 38 }
				]
			}]
		}
		
		return (
		<div>
			
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineChart;                           