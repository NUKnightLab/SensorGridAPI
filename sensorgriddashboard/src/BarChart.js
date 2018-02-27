import React, { Component } from 'react'
import './App.css'
import { scaleLinear } from 'd3'
import { max } from 'd3'
import { select } from 'd3'
import { scaleTime } from 'd3-scale'
import { XYFrame, OrdinalFrame } from "semiotic"


class BarChart extends Component {
   constructor(props){
      super(props)
   }
   
render() {
      return (
                <XYFrame
                  size={[1200, 500]}
                  lines={this.props.displayData}
                  lineDataAccessor={"data"}
                  lineStyle={d => ({ fill: d.color, fillOpacity: 0.5, stroke: d.color, strokeWidth: '3px' })}
                  xAccessor="created_at"
                  yAccessor="gasSensor"
                  xScaleType={scaleTime()}
                  lineIDAccessor="id"
                  margin={{ "top": 60, "bottom": 65, "left": 60, "right": 20 }}
                  hoverAnnotation={true}
                  axes={[
                    { orient: 'left', tickFormat: d => d },
                    { ticks: 5, orient: 'bottom', tickFormat: d => {
                      // console.log(typeof d)
                      // console.log(d.toString().split(" "))
                      // console.log(d.toString().split(" ")[1] + " " + d.toString().split(" ")[2])
                      return  d.toString().split(" ")[1] + " " + d.toString().split(" ")[2]
                    }
                    }
                  ]}
                />
          );
   }
}
export default BarChart
