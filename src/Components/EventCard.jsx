import React, { Component } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCardFooter,
  MDBTooltip,
  MDBCardTitle,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText
} from "mdbreact";
import { Link, Switch } from "react-router-dom";
import "../App.css";
class EventCard extends Component {
  render() {
    const { artistEvent } = this.props;

    let source = "images/3.jpg";
    return (
      <Switch>
        <section className="text-center my-5 h-40">
          <MDBCard narrow ecommerce className="h-100 mb-2">
            <MDBCardImage
              cascade
              top
              src={`/${source}`}
              alt="sample photo"
              className="card-img"
            />
            <MDBCardBody cascade>
              <strong>
                <a href="#!" className="text-success">
                  <h5>{artistEvent.datetime}</h5>
                </a>
              </strong>
              <MDBCardTitle>
                <strong>{artistEvent.venue.name}</strong>
              </MDBCardTitle>
              <MDBCardText>{artistEvent.venue.country}</MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  {artistEvent.venue.city}
                </span>
                <span className="float-right">
                  <MDBTooltip placement="top" tag="a" domElement>
                    <span color="transparent">
                      <i className="fa fa-eye orange-text ml-3"> </i>
                    </span>
                    <div>Quick look</div>
                  </MDBTooltip>
                  <MDBTooltip placement="top" tag="a" domElement>
                    <span color="transparent">
                      <i className="fa fa-heart red-text ml-3"> </i>
                    </span>
                    <div>Add to watchlist</div>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </section>
      </Switch>
    );
  }
}

export default EventCard;
