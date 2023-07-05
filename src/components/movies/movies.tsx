import { Component } from "react";
import { MovieService } from "../../services/movie.service";
import { Movie, MovieResponse } from "../../interfaces/MovieResponse";
import { Link } from "react-router-dom";
import Pagination from "../pagination";

interface State {
  movieResponse: MovieResponse;
  movies: Movie[];
  currentPage: number;
  movieurl:string
}

export default class Movies extends Component<{}, State> {
  movieService = new MovieService();
  state: State = {
    movieResponse: {} as MovieResponse,
    movies: [] as Movie[],
    currentPage: 1,
    movieurl:window.location.pathname
  };

  componentDidMount(): void {
    if (this.state.movieurl === "/movies/popular-movies") {
      this.getPopularMovies();
    }
    if (this.state.movieurl === "/movies/top-rated") {
      this.getTopRatedMovies();
    }
    if (this.state.movieurl === "/movies/upcoming") {
      this.getUpcomingMovies();
    }
    if (this.state.movieurl === "/movies/now-playing") {
      this.nowPlayingMovies();
    }
  }

  componentDidUpdate(_: {}, prevState: State): void {
    if (prevState.currentPage !== this.state.currentPage) {
      if (this.state.movieurl === "/movies") {
        this.getPopularMovies();
      }
      if (this.state.movieurl === "/movies/top-rated") {
        this.getTopRatedMovies();
      }
      if (this.state.movieurl === "/movies/upcoming") {
        this.getUpcomingMovies();
      }
      if (this.state.movieurl === "/movies/now-playing") {
        this.nowPlayingMovies();
      }
    }
  }
  nowPlayingMovies() {
    this.movieService
      .nowPlayingMovies(this.state.currentPage)
      .then((response) => {
        this.setState({
          movieResponse: response.data,
          movies: response.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while fetching data. Please try again.");
      });
  }
  
  getTopRatedMovies() {
    this.movieService
      .getTopRatedMovies(this.state.currentPage)
      .then((response) => {
        this.setState({
          movieResponse: response.data,
          movies: response.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while fetching data. Please try again.");
      });
  }
  getUpcomingMovies() {
    this.movieService
      .getUpcomingMovies(this.state.currentPage)
      .then((response) => {
        this.setState({
          movieResponse: response.data,
          movies: response.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while fetching data. Please try again.");
      });
  }

  getPopularMovies() {
    this.movieService
      .getPopularMovies(this.state.currentPage)
      .then((response) => {
        this.setState({
          movieResponse: response.data,
          movies: response.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while fetching data. Please try again.");
      });
  }

  handleNextPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handlePreviousPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }));
  };

  handleDataChange = (newPageNumber: number) => {
    this.setState({ currentPage: newPageNumber });
  };

  render() {
    const { movies, currentPage } = this.state;

    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col mb-4">
              <div
                className="card overflow-hidden"
                style={{ width: "18rem", height: "25rem" }}
              >
                <Link
                  to={{
                    pathname: `/movie-details/${movie.id}`,
                  }}
                >
                  {movie.backdrop_path ? (
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                      }
                      className="card-img-top img-fluid"
                      alt={movie.title}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <div className="d-flex justify-content-center align-items-center bg-secondary text-white p-3">
                      Image not available
                    </div>
                  )}
                </Link>
                <div className="card-body hide-scrollbar">
                  <h5 className="card-title">{movie.title}</h5>
                  <p
                    className="card-text"
                    style={{
                      maxHeight: "10rem",
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {movie.overview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="pagination-buttons fixed-bottom mb-4"
          style={{
            position: "fixed",
            right: "2rem",
            bottom: "1rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        ></div>
        <Pagination
          pageNumber={currentPage}
          onDataChange={this.handleDataChange}
        />
      </div>
    );
  }
}
