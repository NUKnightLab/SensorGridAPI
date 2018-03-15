import React, { Component } from 'react'
import { scaleTime } from 'd3-scale'
import { XYFrame, OrdinalFrame } from "semiotic"
import './TimeSeries.css';
import moment from 'moment';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';




class TimeSeries extends Component {
   constructor(props){
      super(props)
   }

render() {
  // console.log('displayData', this.props.displayData)
      return (
            <Card className='time-series-card'>
              <CardTitle className='card-title'>Sensor Grid Time Series Data</CardTitle>
              <CardSubtitle className='card-title'>Data 1 Measurements</CardSubtitle>
                <XYFrame
                  size={[1050, 500]}
                  lines={this.props.displayData}
                  lineDataAccessor={"data"}
                  lineStyle={d => ({ fill: d.color, fillOpacity: 0.5, stroke: d.color, strokeWidth: '3px' })}
                  xAccessor="created_at"
                  yAccessor={this.props.type}
                  xScaleType={scaleTime()}
                  lineIDAccessor="id"
                  margin={{ "top": 15, "bottom": 65, "left": 50, "right": 25 }}
                  hoverAnnotation={true}
                  axes={[
                    { orient: 'left', tickFormat: d => {
                    return d },
                    ticks:10
                    },
                    { ticks: 5, orient: 'bottom', tickFormat: d => {return moment(d).format("MMM Do, h:mm:ss")}}
                  ]}
                  tooltipContent={d =>
                    <div className="tooltip-content" >
                      <p>Data Reading: {d[this.props.type]}</p>
                      <p>Date: {d.created_at.toString()}</p>
                   </div>}
                  />
              </Card>

          );
   }
}
export default TimeSeries
