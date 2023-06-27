import React, { Component } from "react";
import { MovieService } from "../services/movie.service";
import { Movie, MovieResponse } from "../models/MovieResponse";
import { Link } from "react-router-dom";

interface State {
  movieResponse: MovieResponse;
  movies: Movie[];
  currentPage: number;
  moviesPerPage: number;
}

export default class Movies extends Component<{}, State> {
  movieService = new MovieService();
  state: State = {
    movieResponse: {} as MovieResponse,
    movies: [] as Movie[],
    currentPage: 1,
    moviesPerPage: 9,
  };

  componentDidMount(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().then((response) => {
      this.setState({
        movieResponse: response.data,
        movies: response.data.results,
      });
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

  render() {
    const { movies, currentPage, moviesPerPage } = this.state;
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          {currentMovies.map((movie) => (
            <div key={movie.id} className="col mb-4">
              <div
                className="card overflow-hidden"
                style={{ width: "18rem", height: "25rem" }}
              >
                <Link
                  to={{
                    pathname: `movie-details/${movie.id}`,
                  }}
                >
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                    }
                    className="card-img-top img-fluid"
                    alt={movie.title}
                    style={{ cursor: "pointer" }}
                  />
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
        >
          {currentPage > 1 && (
            <button
              className="btn btn-primary mr-2"
              onClick={this.handlePreviousPage}
              style={{ margin: "2px" }}
            >
              Back
            </button>
          )}
          {movies.length > indexOfLastMovie && (
            <button
              className="btn btn-primary"
              style={{ margin: "2px" }}
              onClick={this.handleNextPage}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}
