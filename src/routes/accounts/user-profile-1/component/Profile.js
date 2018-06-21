/**
 * Profile Page
 */
import React, { Component } from 'react';
import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NotificationManager } from 'react-notifications';

// intlmessages
import IntlMessages from 'Util/IntlMessages';

export default class Profile extends Component {

  /**
   * On Update Profile
   */
  onUpdateProfile() {
    NotificationManager.success('Profile Updated Successfully!');
  }

  render() {
    return (
      <div className="profile-wrapper w-50">
        <h2 className="heading">Account Details</h2>
        <Form>
          <FormGroup row>
            <Label for="accountId" sm={3}>Account Id</Label>
            <Col sm={9}>
              <Input disabled type="text" name="accountId" id="accountId" className="input-lg" value="1" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="accountNo" sm={3}>Account No</Label>
            <Col sm={9}>
              <Input type="text" name="accountNo" id="accountNo" className="input-lg" value="100029921" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address" sm={3}>Address</Label>
            <Col sm={9}>
              <Input type="text" name="address" id="address" className="input-lg" value="159/3A, west sgeparapara." />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="apartment" sm={3}>Apartment</Label>
            <Col sm={9}>
              <Input type="text" name="apartment" id="apartment" className="input-lg" value="4A" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="city" sm={3}>City</Label>
            <Col sm={9}>
              <Input type="text" name="city" id="city" className="input-lg" value="Dhaka" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="area" sm={3}>Area</Label>
            <Col sm={9}>
              <Input type="text" name="area" id="area" className="input-lg" value="Mirpure" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="subArea" sm={3}>Sub Area</Label>
            <Col sm={9}>
              <Input type="text" name="subArea" id="subArea" className="input-lg" value="Shewrapara" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="postalCode" sm={3}>Postal Code</Label>
            <Col sm={9}>
              <Input type="text" name="postalCode" id="postalCode" className="input-lg" value="1212" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="balance" sm={3}>Balance</Label>
            <Col sm={9}>
              <Input disabled type="text" name="balance" id="balance" className="input-lg" value="-90" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="status" sm={3}>Status</Label>
            <Col sm={9}>
              <Input type="text" name="status" id="status" className="input-lg" value="Active" disabled />
            </Col>
          </FormGroup>
        </Form>
        
        <hr />
        <Button variant="raised" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}><IntlMessages id="widgets.updateProfile" /></Button>
      </div>
    );
  }
}
