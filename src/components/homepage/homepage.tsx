import React, { Component } from "react";
import Cardfront from "./homepagecards/cardfront";
import Cardback from "./homepagecards/cardback";
import { Link } from "react-router-dom";

interface HomepageState {
  imageNamePopularMovies: string;
  isFlippedPopularMovies: boolean;
  isFlippedTopRatedMovies: boolean;
  isFlippedUpcomingMovies: boolean;
  isFlippedNowPlayingMovies: boolean;

  imageNameUpcomingMovies: string;
  CardBackTitlePopularMovies: string;
  CardBackTitleTopRatedMovies: string;
  imageNameTopRatedMovies: string;
  CardBackTitleUpcomingMovies: string;
  imageNameNowPlayingMovies: string;
  CardBackNowPlayingMovies: string;
}

export default class Homepage extends Component<{}, HomepageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      imageNamePopularMovies: "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
      imageNameTopRatedMovies: "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
      imageNameUpcomingMovies: "/tTfnd2VrlaZJSBD9HUbtSF3CqPJ.jpg",
      imageNameNowPlayingMovies:"/fhquRW28vRZHr26orSaFFnhYIA0.jpg",

      CardBackTitlePopularMovies: "Popular Movies",
      CardBackTitleTopRatedMovies: "Top Rated Movies",
      CardBackTitleUpcomingMovies: "Upcoming Movies",
      CardBackNowPlayingMovies:"Now Playing Movies",

      isFlippedPopularMovies: false,
      isFlippedTopRatedMovies: false,
      isFlippedUpcomingMovies: false,
      isFlippedNowPlayingMovies:false
    };
  }

  PopularMovieshandleMouseEnter = () => {
    this.setState({ isFlippedPopularMovies: true });
  };

  PopularMovieshandleMouseLeave = () => {
    this.setState({ isFlippedPopularMovies: false });
  };

  TopRatedhandleMouseEnter = () => {
    this.setState({ isFlippedTopRatedMovies: true });
  };

  TopRatedhandleMouseLeave = () => {
    this.setState({ isFlippedTopRatedMovies: false });
  };
  UpcominghandleMouseEnter = () => {
    this.setState({ isFlippedUpcomingMovies: true });
  };

  UpcominghandleMouseLeave = () => {
    this.setState({ isFlippedUpcomingMovies: false });
  };
  NowPlayinghandleMouseEnter = () => {
    this.setState({ isFlippedNowPlayingMovies: true });
  };

  NowPlayinghandleMouseLeave = () => {
    this.setState({ isFlippedNowPlayingMovies: false });
  };

  render() {
    const {
      CardBackTitlePopularMovies,
      CardBackTitleTopRatedMovies,
      imageNamePopularMovies,
      isFlippedPopularMovies,
      isFlippedTopRatedMovies,
      imageNameTopRatedMovies,
      isFlippedUpcomingMovies,
      CardBackTitleUpcomingMovies,
      imageNameUpcomingMovies,
      isFlippedNowPlayingMovies,
      CardBackNowPlayingMovies,
      imageNameNowPlayingMovies
    } = this.state;

    return (
      <div>
        <div style={{ textAlign: "center", paddingTop: "3%" }}>
          <h1 style={{ fontWeight: "400" }}>IMDB Movies React Project</h1>
          <br />
          <p className="furkan">
            This project is developed using React with TypeScript.
            <br /> It is a movie application that retrieves movie data and
            displays it to the user.
            <br />
            The user interface is interactive and allows users to browse and
            explore movies.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            href="https://github.com/furkancak1r"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/github-mark.png"
              alt="Github Logo"
              style={{ margin: "10px", width: "61.3px", height: "52.2624px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammet-furkan-%C3%A7ak%C4%B1r-b3a64515a/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/LI-In-Bug.png"
              alt="Github Logo"
              style={{ margin: "10px", width: "61.3px", height: "52.2624px" }}
            />
          </a>
        </div>

        <div
          className={`container d-flex flex-column justify-content-center align-items-center`}
        >
          <div className="row">
            <div id="Popular_Movies" className="col mb-4">
              <div style={{ padding: "30px" }}>
                <Link
                  to={{
                    pathname: `movies/popular-movies`,
                  }}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div
                    onMouseEnter={this.PopularMovieshandleMouseEnter}
                    onMouseLeave={this.PopularMovieshandleMouseLeave}
                  >
                    {isFlippedPopularMovies ? (
                      <Cardback cardbacktitle={CardBackTitlePopularMovies} />
                    ) : (
                      <Cardfront imageName={imageNamePopularMovies} />
                    )}
                  </div>
                </Link>
              </div>
            </div>
            <div id="Top_Rated_Movies" className="col mb-4">
              <div style={{ padding: "30px" }}>
                <Link
                  to={{
                    pathname: `movies/top-rated`,
                  }}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div
                    onMouseEnter={this.TopRatedhandleMouseEnter}
                    onMouseLeave={this.TopRatedhandleMouseLeave}
                  >
                    {isFlippedTopRatedMovies ? (
                      <Cardback cardbacktitle={CardBackTitleTopRatedMovies} />
                    ) : (
                      <Cardfront imageName={imageNameTopRatedMovies} />
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div id="Upcoming_Movies" className="col mb-4">
              <div style={{ padding: "30px" }}>
                <Link
                  to={{
                    pathname: `movies/upcoming`,
                  }}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div
                    onMouseEnter={this.UpcominghandleMouseEnter}
                    onMouseLeave={this.UpcominghandleMouseLeave}
                  >
                    {isFlippedUpcomingMovies ? (
                      <Cardback cardbacktitle={CardBackTitleUpcomingMovies} />
                    ) : (
                      <Cardfront imageName={imageNameUpcomingMovies} />
                    )}
                  </div>
                </Link>
              </div>
            </div>
            <div id="Now_Playing_Movies" className="col mb-4">
              <div style={{ padding: "30px" }}>
                <Link
                  to={{
                    pathname: `movies/now-playing`,
                  }}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div
                    onMouseEnter={this.NowPlayinghandleMouseEnter}
                    onMouseLeave={this.NowPlayinghandleMouseLeave}
                  >
                    {isFlippedNowPlayingMovies ? (
                      <Cardback cardbacktitle={CardBackNowPlayingMovies} />
                    ) : (
                      <Cardfront imageName={imageNameNowPlayingMovies} />
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
