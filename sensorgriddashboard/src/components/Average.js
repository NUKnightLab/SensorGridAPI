
import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';

class Average extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false,
                   data: [ 300, 400, 700 ],
                   average: 400
                  };
  }

  componentWillMount() {
    this.setState({ average: this.averageArray()});
  }

  componentDidUpdate() {

  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  averageArray() {
    let array = this.state.data;
    console.log(array);
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
    return avg


  }

  render() {
    return (
      <div>
        <Card onClick={this.toggle}>

            <Container>
              <Row>
                <h1>Average</h1>
              </Row>
              <Row>
                <h2>{this.state.average}</h2>
              </Row>
              <Collapse isOpen={this.state.collapse}>
              <Row>
                <ListGroup>
                  {this.state.data.map((obj, index) =>
                      <ListGroupItem key={index} > Sensor {index + 1}: {obj} </ListGroupItem>
                  )}
                </ListGroup>
              </Row>
              </Collapse>
            </Container>
        </Card>
      </div>
    );
  }
}

export default Average;
