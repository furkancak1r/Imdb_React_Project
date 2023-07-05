import { Component } from "react";
import { MovieService } from "../../services/movie.service";
import { Movie, MovieResponse } from "../../interfaces/MovieResponse";
import { Link } from "react-router-dom";
import Pagination from "../pagination";

interface State {
  movieResponse: MovieResponse;
  movies: Movie[];
  currentPage: number;
  movieurl: string;
}

interface MovieServiceFunction {
  (currentPage: number): Promise<MovieResponse>;
}

interface MovieServiceMap {
  [key: string]: MovieServiceFunction;
}

export default class Movies extends Component<{}, State> {
  movieService = new MovieService();
  movieServiceMap: MovieServiceMap = {
    "/movies/popular-movies": this.getPopularMovies,
    "/movies/top-rated": this.getTopRatedMovies,
    "/movies/upcoming": this.getUpcomingMovies,
    "/movies/now-playing": this.nowPlayingMovies,
  };

  state: State = {
    movieResponse: {} as MovieResponse,
    movies: [] as Movie[],
    currentPage: 1,
    movieurl: window.location.pathname,
  };

  componentDidMount(): void {
    this.fetchMovies();
  }

  componentDidUpdate(_: {}, prevState: State): void {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchMovies();
    }
  }

  fetchMovies(): void {
    const { movieServiceMap, state } = this;
    const fetchMoviesFn = movieServiceMap[state.movieurl];
    if (fetchMoviesFn) {
      fetchMoviesFn.call(this, state.currentPage)
        .then((response: MovieResponse) => {
          this.setState({
            movieResponse: response,
            movies: response.results,
          });
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while fetching data. Please try again.");
        });
    }
  }

  nowPlayingMovies(currentPage: number): Promise<MovieResponse> {
    return this.movieService.nowPlayingMovies(currentPage)
      .then((response) => response.data);
  }

  getTopRatedMovies(currentPage: number): Promise<MovieResponse> {
    return this.movieService.getTopRatedMovies(currentPage)
      .then((response) => response.data);
  }

  getUpcomingMovies(currentPage: number): Promise<MovieResponse> {
    return this.movieService.getUpcomingMovies(currentPage)
      .then((response) => response.data);
  }

  getPopularMovies(currentPage: number): Promise<MovieResponse> {
    return this.movieService.getPopularMovies(currentPage)
      .then((response) => response.data);
  }

  handleNextPage = (): void => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handlePreviousPage = (): void => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }));
  };

  handleDataChange = (newPageNumber: number): void => {
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
