import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Distance extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Distance  Graph(Km)"
			},
			subtitles: [{
				text: "Total",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				indexLabel: "{name}: {y}",
				
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Risky", y: 50 },
					{ name: "Moderate", y: 30 },
					{ name: "Safe", y: 20 }
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

export default Distance;