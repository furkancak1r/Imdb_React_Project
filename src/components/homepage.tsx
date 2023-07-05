import { Component } from "react";
import Cardfront from "./cards/cardfront";
import Cardback from "./cards/cardback";
import { Link } from "react-router-dom";

interface HomepageState {
  imageName: string;
  isFlipped: boolean;
}

export default class Homepage extends Component<{}, HomepageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      imageName: "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
      isFlipped: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isFlipped: true });
  };

  handleMouseLeave = () => {
    this.setState({ isFlipped: false });
  };

  render() {
    const { imageName, isFlipped } = this.state;

    return (
      <div>
        <div style={{ textAlign: "center", paddingTop: "10%" }}>
          <h1 style={{ fontWeight: "400" }}>IMDB Movies React Project</h1>
          <br></br>
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

        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col mb-4">
              <div style={{ padding: "30px" }}>
                <Link
                  to={{
                    pathname: `movies`,
                  }}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div
                    //style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                  >
                    {isFlipped ? (
                      <Cardback />
                    ) : (
                      <Cardfront imageName={imageName} />
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
