import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import { Col, Row, Container } from 'react-bootstrap';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChart extends Component {
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
                text: "Normal vs Negative",
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Direct" },
					{ y: 49, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 5, label: "Referral" },
					{ y: 19, label: "Social" }
				]
			}]
		}
		
		return (
		<div>
			<Container>
  
            <Row>
    <Col></Col>
    <Col></Col>
    </Row>
  <Row>
    <Col></Col>
    <br></br><br></br><br></br><br></br>
    <Col><CanvasJSChart  options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}</Col>
  </Row>
</Container>
			
		</div>
		);
	}
}

export default PieChart;