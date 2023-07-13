import React, { Component } from "react";
import Cardfront from "./homepagecards/cardfront";
import Cardback from "./homepagecards/cardback";
import { Link } from "react-router-dom";
import {HomepageState} from "../../interfaces/HomePageInterface"

class Homepage extends Component<{}, HomepageState> {
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
  handleMouseEnter = (key: keyof HomepageState) => {
    this.setState(prevState => ({ ...prevState, [key]: true }));
  };

  handleMouseLeave = (key: keyof HomepageState) => {
    this.setState(prevState => ({ ...prevState, [key]: false }));
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
          <SocialLink
            href="https://github.com/furkancak1r"
            imageSrc="/github-mark.png"
          />
          <SocialLink
            href="https://www.linkedin.com/in/muhammet-furkan-%C3%A7ak%C4%B1r-b3a64515a/"
            imageSrc="/LI-In-Bug.png"
          />
        </div>

        <div className="container d-flex flex-column justify-content-center align-items-center">
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
                    onMouseEnter={() =>
                      this.handleMouseEnter("isFlippedPopularMovies")
                    }
                    onMouseLeave={() =>
                      this.handleMouseLeave("isFlippedPopularMovies")
                    }
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
                    onMouseEnter={() =>
                      this.handleMouseEnter("isFlippedTopRatedMovies")
                    }
                    onMouseLeave={() =>
                      this.handleMouseLeave("isFlippedTopRatedMovies")
                    }
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
                    onMouseEnter={() =>
                      this.handleMouseEnter("isFlippedUpcomingMovies")
                    }
                    onMouseLeave={() =>
                      this.handleMouseLeave("isFlippedUpcomingMovies")
                    }
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
                    onMouseEnter={() =>
                      this.handleMouseEnter("isFlippedNowPlayingMovies")
                    }
                    onMouseLeave={() =>
                      this.handleMouseLeave("isFlippedNowPlayingMovies")
                    }
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

interface SocialLinkProps {
  href: string;
  imageSrc: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, imageSrc }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img
      src={imageSrc}
      alt="Social Link Logo"
      style={{ margin: "10px", width: "61.3px", height: "52.2624px" }}
    />
  </a>
);

export default Homepage;
