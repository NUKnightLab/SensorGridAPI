import React, { Component } from 'react'
import './Battery.css'
import {

    Button,
    ButtonGroup,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class Battery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [3.6, 3.9, 4.1]
        }
    }

    getColor(reading) {
        if (reading < 3.8) {
            return "#f77d7b";
        } else if (reading >= 3.8 && reading < 4.0) {
            return "yellow";
        } else {
            return "#91f7b0";
        }
    }





    render() {
        var styles = {
            node1: {
                color: this.getColor(this.state.data[0])
            },
            node2: {
                color: this.getColor(this.state.data[1])
            },
            node3: {
                color: this.getColor(this.state.data[2])
            },
            text: {
                color: "white"
            }
        }
        return (
            <div>
                <ButtonGroup vertical id="NodeBattery">
                    <Button ><p style={styles.text}>Node 1: <p style={styles.node1}>{this.state.data[0]}</p></p></Button>
                    <Button ><p style={styles.text}>Node 2: <p style={styles.node2}>{this.state.data[1]}</p></p></Button>
                    <Button><p style={styles.text}>Node 3: <p style={styles.node3}>{this.state.data[2]}</p></p></Button>
                </ButtonGroup>
                
      </div>
        )
    }
}

export default Battery
