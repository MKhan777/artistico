import React from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import EventCard from "./EventCard";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBAlert
} from "mdbreact";
class Events extends React.Component {
  render() {
    const { artistEvents } = this.props;

    const artistEvent = artistEvents.map(artistEvent => (
      <Col xs={12} sm={6} md={4} lg={3} key={artistEvents.id}>
        <EventCard key={artistEvent.id} artistEvent={artistEvent} />
      </Col>
    ));

    return (
      <React.Fragment>
        <main className="container-fluid">
          <Row>
            <CardGroup>{artistEvent}</CardGroup>
          </Row>
        </main>
      </React.Fragment>
    );
  }
}

export default Events;
