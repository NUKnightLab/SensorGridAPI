import React, { Component } from 'react'
import './Battery.css'
import {

    Button,
    ButtonGroup,
    ListGroup,
    ListGroupItem,
    Progress,
    Table,
    Card
} from 'reactstrap';
//import * as FontAwesome from 'react-icons/lib/fa'
import { FaBattery4, FaBattery2, FaBattery1, FaSignal, FaCheckCircle, FaExclamationCircle } from 'react-icons/lib/fa';
class Battery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }
    }

    getBattery(reading) {
        reading = parseInt(reading)
        if (reading < 3.8) {
            return <FaBattery1 size="40px" color="red" />;
        } else if (reading >= 3.8 && reading < 4.0) {
            return <FaBattery2 size="40px" />;
        } else {
            return <FaBattery4 size="40px" color="green" />;
        }
    }





    render() {
        console.log('battery', this.props.data)

        return (
            <div>
              <Card>
                <Table hover id = "summary">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Battery</th>
                            <th>Network</th>
                            <th>Reading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{this.getBattery(this.props.data[0])}</td>
                            <td><FaSignal size="30px" /></td>
                            <td><FaExclamationCircle size = "35px" color="red" /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>{this.getBattery(this.props.data[1])}</td>
                            <td><FaSignal size="30px" /></td>
                            <td><FaCheckCircle size = "35px"/></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>{this.getBattery(this.props.data[2])}</td>
                            <td><FaSignal size="30px" color = "red"/></td>
                            <td><FaCheckCircle size = "35px"/></td>
                        </tr>
                    </tbody>
                </Table>


                <div>

                </div>
              </Card>
            </div>
        )
    }
}

export default Battery
