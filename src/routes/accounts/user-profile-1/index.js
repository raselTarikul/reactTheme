/**
 * User Profile Page
 */
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


// Components
import Profile from './component/Profile';
import Subscription from './component/Subscription';
import Transaction from './component/Transaction';
import Card from './component/Card';

import Address from './component/Address';

// rct card box
import { RctCard } from 'Components/RctCard';
;

// intl messages
import IntlMessages from 'Util/IntlMessages';

// For Tab Content
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default class UserProfile extends Component {

  state = {
    activeTab: this.props.location.state ? this.props.location.state.activeTab : 0
  }

  handleChange = (event, value) => {
    this.setState({ activeTab: value });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="userProfile-wrapper">
        <RctCard>
          <div className="rct-tabs">
            <AppBar position="static">
              <Tabs
                value={activeTab}
                onChange={this.handleChange}
                scrollable
                scrollButtons="off"
                indicatorColor="primary"
              >
                <Tab icon={<i className="ti-user"></i>} label={"Account"} />
                <Tab icon={<i className="ti-user"></i>} label={"Subscriptions"} />
                <Tab icon={<i className="ti-user"></i>} label={"Transaction"} />
                <Tab icon={<i className="ti-user"></i>} label={"Card"} />
              </Tabs>
            </AppBar>
            {activeTab === 0 &&
              <TabContainer>
                <Profile />
              </TabContainer>}
            {activeTab === 1 &&
              <TabContainer>
                <Subscription />
              </TabContainer>}
            {activeTab === 2 &&
              <TabContainer>
                <Transaction />
              </TabContainer>}
            {activeTab === 3 &&
              <TabContainer>
                <Card />
              </TabContainer>}
          </div>
        </RctCard>
      </div>
    );
  }
}
