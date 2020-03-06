import React, { Component } from "react";
import Main from "./Main";
import Search from "./Search";
import Cards from "./Cards";
class Home extends Component {
  state = {};
  render() {
    const { onFetchArtistDetail, artist, loaded, notFound } = this.props;
    return (
      <React.Fragment>
        <Main />
        <Search onFetchArtistDetail={onFetchArtistDetail} />
        <Cards artist={artist} loaded={loaded} notFound={notFound} />
      </React.Fragment>
    );
  }
}
export default Home;
