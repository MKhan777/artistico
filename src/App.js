import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import Home from "./Components/Home";
import ArtistDetail from "./Components/ArtistDetail";
import Footer from "./Components/Footer";
import Button from "./Components/button/button";
class App extends React.Component {
  state = {
    artist: {
      id: "",
      name: "",
      url: "",
      mbid: "",
      options: {
        display_listen_unit: false
      },
      image_url: "",
      thumb_url: "",
      facebook_page_url: "",
      tracker_count: 0,
      upcoming_event_count: 0
    },
    loaded: false,
    notFound: true,
    artistEvents: [
      {
        id: "",
        url: "",
        datetime: "",
        description: "",
        venue: {
          country: "",
          city: "",
          latitude: "",
          name: "",
          region: "",
          longitude: ""
        },
        lineup: [""],
        offers: [
          {
            type: "",
            url: "",
            status: ""
          }
        ],
        artist_id: "",
        on_sale_datetime: ""
      }
    ]
  };

  fetchArtistEventDetail = artistName => {
    axios({
      method: "get",
      url:
        "https://rest.bandsintown.com/artists/" +
        artistName +
        "/events?app_id=12"
    })
      .then(response => {
        this.setState({
          artistEvents: response.data
        });
      })
      .catch(err => {
        console.log(err.message);
        this.setState({ notFound: true });
      });
  };
  fetchArtistFilterEvent = (artistName, filter) => {
    axios({
      method: "get",
      url:
        "https://rest.bandsintown.com/artists/" +
        artistName +
        "/events?app_id=12&date=" +
        filter
    })
      .then(response => {
        this.setState({ artistEvents: response.data });
      })
      .catch(err => {
        console.log(err.message);
        this.setState({ notFound: true, loaded: false });
      });
  };
  fetchArtistDetail = artistName => {
    this.setState({ loaded: false });
    axios({
      method: "get",
      url: "https://rest.bandsintown.com/artists/" + artistName + "?app_id=12"
    })
      .then(response => {
        //if (response.) {
        console.log("response data" + response.data);
        // }

        this.setState({ artist: response.data, loaded: true, notFound: false });
        this.fetchArtistEventDetail(artistName);
      })
      .catch(err => {
        console.log(err.message, this.state.loaded);
        this.setState({ notFound: true, loaded: false });
      });
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  onFetchArtistDetail={this.fetchArtistDetail}
                  artist={this.state.artist}
                  loaded={this.state.loaded}
                  notFound={this.state.notFound}
                />
              )}
            />
            <Route
              exact
              path="/test"
              render={props => <Button label={"click me Please"}> </Button>}
            />

            <Route
              path="/artist/:name"
              render={props => (
                <ArtistDetail
                  {...props}
                  onFetchArtistFilterEvent={this.fetchArtistFilterEvent}
                  artistEvents={this.state.artistEvents}
                  artist={this.state.artist}
                />
              )}
            />
          </Switch>
          <Route path="/" component={Footer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
