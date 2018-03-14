
import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';
import './Average.css'

class SummaryBar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false,
                   data: [ 300, 400, 700 ],
                   average: 400
                  };
  }

  render() {
    return (
      <div>
        <Card>
          <Container>
            <ListGroup>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Container>
        </Card>
      </div>
    );
  }
}

export default SummaryBar;
