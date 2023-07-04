import { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center", paddingTop: "10%" }}>
          <h1 style={{ fontWeight: "400" }}>IMDB Movies React Project</h1>
          <br></br>
          <p>
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
              <div
                style={{ padding:"30px" }}
              >
                <Link
                  to={{
                    pathname: `movies`,
                  }}
                >
                  <img
                    src={"https://image.tmdb.org/t/p/w500/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg"}
                    className="card-img-top img-fluid"
                    alt=""
                    style={{ cursor: "pointer",borderRadius:"20px",boxShadow:"7px 10px 30px black" }}
                  />                
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
