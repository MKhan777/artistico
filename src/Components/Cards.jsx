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
  MDBCardText,
  MDBCol,
  MDBAlert
} from "mdbreact";
import { Link, Switch } from "react-router-dom";
import "../App.css";
class Cards extends Component {
  render() {
    const { artist, loaded, notFound } = this.props;
    console.log("loaded", loaded, notFound);
    if (notFound === true && loaded === false) {
      return <div />;
    } else if (loaded === true && notFound === true) {
      return <MDBAlert color="primary">Not Found</MDBAlert>;
    } else {
      return (
        <Switch>
          <MDBCol
            className="align-self-center my-auto"
            xs="12"
            sm="6"
            md="4"
            lg="3"
          >
            <div>
              <MDBCard narrow ecommerce className="text-center mb-5">
                <MDBCardImage
                  cascade
                  top
                  src={artist.image_url}
                  alt="sample photo"
                  className="card-img"
                />
                <MDBCardBody cascade>
                  <strong>
                    <a href="#!" className="text-success">
                      <h5>{artist.url}</h5>
                    </a>
                  </strong>
                  <MDBCardTitle>
                    <strong>{artist.name}</strong>
                  </MDBCardTitle>
                  <MDBCardText>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci.
                  </MDBCardText>

                  <MDBBtn color={this.getButtonClasses()}>
                    <Link
                      to={{
                        pathname: `/artist/${artist.name}`
                      }}
                      style={{ color: "#fff", fontWeight: "bolder" }}
                    >
                      Show Upcoming Events
                      <span className="cards-text badge">
                        {artist.upcoming_event_count}
                      </span>
                    </Link>
                  </MDBBtn>

                  <MDBCardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      {artist.tracker_count}
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
            </div>
          </MDBCol>
        </Switch>
      );
    }
  }
  getButtonClasses() {
    let classes = "";
    if (this.props.artist !== undefined) {
      classes +=
        this.props.artist.upcoming_event_count === 0 ? "warning" : "primary";
      return classes;
    }
  }
}

export default Cards;
