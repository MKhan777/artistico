import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBAlert
} from "mdbreact";
import Events from "./Events";
class ArtistDetail extends Component {
  state = {
    events: ""
  };
  submitHandler = event => {
    const { artist, artistEvent, onFetchArtistFilterEvent } = this.props;
    event.preventDefault();
    event.target.className += " was-validated";
    console.log(this.state.events);
    onFetchArtistFilterEvent(artist.name, this.state.events);
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { artistEvents, artist, onfetchArtistFilter } = this.props;
    console.log("yha aya ho", artist);
    if (artistEvents === "") {
      console.log("yha aya ho", artist);
      return (
        <MDBAlert color="primary">
          A simple primary alert—check it out!
        </MDBAlert>
      );
    } else {
      return (
        <React.Fragment>
          <Switch>
            <MDBContainer fluid>
              <h2
                style={{ color: "#140b14" }}
                className="h1-responsive text-center my-5"
              >
                {artist.name} Details and Upcoming Events
              </h2>
              <MDBRow className="mt-5">
                <MDBCol md="4" sm="12">
                  <img
                    src={artist.image_url}
                    alt="Artist"
                    className="display-img img-fluid img-thumbnail"
                  />
                </MDBCol>
                <MDBCol
                  md="8"
                  sm="12"
                  className=" h6-responsive font-weight-bold"
                >
                  <p className="mt-3 text-primary">
                    Name <br />
                    <span className="text-dark">{artist.name}</span>
                  </p>
                  <div className="detail_partition" />
                  <p className="mt-3 text-primary">
                    URL <br />
                    <span className="text-dark">{artist.url}</span>
                  </p>
                  <div className="detail_partition" />
                  <p className="mt-3 text-primary">
                    Thumb URL <br />
                    <span className="text-dark">{artist.thumb_url}</span>
                  </p>
                  <div className="detail_partition" />
                  <p className="mt-3 text-primary">
                    Facebook Page URL <br />
                    <span className="text-dark">
                      {artist.facebook_page_url}
                    </span>
                  </p>
                  <div className="detail_partition" />
                  <p className="mt-3 text-primary">
                    Tracker Count <br />
                    <span className="text-dark">{artist.tracker_count}</span>
                  </p>
                  <div className="detail_partition" />
                  <p className="mt-3 text-primary">
                    Upcoming Events <br />
                    <span className="text-dark">
                      {artist.upcoming_event_count}
                    </span>
                  </p>
                  <div className="detail_partition" />
                  <p className="mt-3 text-primary">Bio</p>
                  <p>
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt, explicabo. Nemo
                    enim ipsam voluptatem,
                  </p>
                  <div className="detail_partition" />
                  <p className="mt-3 text-primary">Share It</p>
                  <span className="fb-ic ml-0">
                    <i className="fab fa-facebook-f mr-lg-3"> </i>
                  </span>
                  <span className="tw-ic">
                    <i className="fab fa-twitter mr-lg-3"> </i>
                  </span>
                  <span className="gplus-ic">
                    <i className="fab fa-google-plus-g mr-lg-3"> </i>
                  </span>
                  <span className="li-ic">
                    <i className="fab fa-linkedin-in mr-lg-3"> </i>
                  </span>
                  <span className="ins-ic">
                    <i className="fab fa-instagram mr-lg-3"> </i>
                  </span>
                  <span className="indigo-text">
                    Add To Wishlist
                    <i className="fas fa-heart pl-2 pr-2 mr-lg-3" />
                  </span>
                  <div className="detail_partition" />
                  <p className="mt-3 text-primary">Time Reminder</p>
                  <div className="text-danger">
                    <span className="pr-1 mr-3 grey lighten-4">25: Days</span>
                    <span className="pr-1 mr-3 grey lighten-4">22 : Hrs</span>
                    <span className="pr-1 mr-3 grey lighten-4">13 : Min</span>
                    <span className="mr-3 grey lighten-4">57 : sec</span>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="mb-4">
                  <form
                    className="needs-validation card-body"
                    onSubmit={this.submitHandler}
                    noValidate
                  >
                    <MDBRow>
                      <MDBCol md="12" className="mb-2">
                        <div className="md-form">
                          <MDBInput
                            value={this.state.events}
                            name="events"
                            onChange={this.changeHandler}
                            type="text"
                            id="events"
                            label="Enter Event Filter"
                            required
                            outline
                          >
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Please provide a Artist Name.
                            </div>
                          </MDBInput>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBBtn
                      style={{ backgroundColor: "#140b14" }}
                      className="btn btn-lg text-white btn-block "
                      gradient="purple"
                      type="submit"
                    >
                      Filter Events
                    </MDBBtn>
                  </form>
                </MDBCol>
              </MDBRow>
              <Events
                artist={artist}
                artistEvents={artistEvents}
                onfetchArtistFilter={onfetchArtistFilter}
              />
            </MDBContainer>
          </Switch>
        </React.Fragment>
      );
    }
  }
}
export default ArtistDetail;
