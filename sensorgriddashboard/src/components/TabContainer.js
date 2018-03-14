import React, { Component } from 'react'
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
import TimeSeries from './TimeSeries';
import MyGoogleMap from './MyGoogleMap';
import realTestData from '../TestData/testData';

class TabContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      displayData: realTestData,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Card>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
                >
                  Data
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
                >
                  Battery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
                >
                  Location
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <TimeSeries displayData={this.state.displayData} />
            </TabPane>
            <TabPane tabId="2">
              <MyGoogleMap />
            </TabPane>
            <TabPane tabId="3">
              <TimeSeries displayData={this.state.displayData} />
            </TabPane>
          </TabContent>
        </Card>
      </div>
    )
  }
}

export default TabContainer
