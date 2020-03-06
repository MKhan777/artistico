import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
class Search extends React.Component {
  state = {
    artist: ""
  };
  submitHandler = event => {
    const { onFetchArtistDetail } = this.props;
    event.preventDefault();
    event.target.className += " was-validated";
    var name = this.state.artist.replace(" ", "%20");
    console.log(name);
    onFetchArtistDetail(name);
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <h2
            style={{ color: "#140b14", fontWeight: 500 }}
            className=" h1-responsive text-center my-5"
          >
            Search Your Favourite Artist and get their past as well as upcomping
            events Details ASAP.
          </h2>
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
                        value={this.state.artist}
                        name="artist"
                        onChange={this.changeHandler}
                        type="text"
                        id="artist"
                        label="Enter Artistic Name"
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
                <button
                  style={{ backgroundColor: "#140b14" }}
                  className="btn btn-lg text-white btn-block "
                  type="submit"
                >
                  Search
                </button>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default Search;
