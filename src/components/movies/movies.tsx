/* eslint-disable jsx-a11y/anchor-is-valid */
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
  movieName: string;
}

interface MovieServiceFunction {
  (currentPage: number): Promise<MovieResponse>;
}

interface MovieServiceMap {
  [key: string]: MovieServiceFunction;
}
interface PageTitleMap {
  [key: string]: string;
}

export default class Movies extends Component<{}, State> {
  movieService = new MovieService();
  movieServiceMap: MovieServiceMap = {
    "/movies/popular-movies": this.getPopularMovies,
    "/movies/top-rated": this.getTopRatedMovies,
    "/movies/upcoming": this.getUpcomingMovies,
    "/movies/now-playing": this.nowPlayingMovies,
  };

  pageTitleMap: PageTitleMap = {
    "/movies/popular-movies": "Popular Movies",
    "/movies/top-rated": "Top Rated Movies",
    "/movies/upcoming": "Upcoming Movies",
    "/movies/now-playing": "Now Playing Movies",
  };

  state: State = {
    movieResponse: {} as MovieResponse,
    movies: [] as Movie[],
    currentPage: 1,
    movieurl: window.location.pathname,
    movieName: "",
  };

  componentDidMount(): void {
    this.fetchMovies();
  }

  componentDidUpdate(_: {}, prevState: State): void {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchMovies();
      window.scrollTo(0, 0);
    }
  }

  fetchMovies(): void {
    const { movieServiceMap, state } = this;
    const fetchMoviesFn = movieServiceMap[state.movieurl];
    if (fetchMoviesFn) {
      fetchMoviesFn
        .call(this, state.currentPage)
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
  getPageTitle(pathname: string): string {
    return this.pageTitleMap[pathname] || "";
  }

  nowPlayingMovies(currentPage: number): Promise<MovieResponse> {
    return this.movieService
      .getNowPlayingMovies(currentPage)
      .then((response) => response.data);
  }

  getTopRatedMovies(currentPage: number): Promise<MovieResponse> {
    return this.movieService
      .getTopRatedMovies(currentPage)
      .then((response) => response.data);
  }

  getUpcomingMovies(currentPage: number): Promise<MovieResponse> {
    return this.movieService
      .getUpcomingMovies(currentPage)
      .then((response) => response.data);
  }

  getPopularMovies(currentPage: number): Promise<MovieResponse> {
    return this.movieService
      .getPopularMovies(currentPage)
      .then((response) => response.data);
  }
  getMoviesByName(
    movieName: string,
    currentPage: number
  ): Promise<MovieResponse> {
    return this.movieService
      .getMoviesByName(movieName, currentPage)
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

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const movieName = event.target.value;
    this.setState({ movieName }, () => {
      const { movieName, currentPage } = this.state;
      if (movieName === "") {
        // Input alanı boş ise tüm filmleri getir
        this.fetchMovies();
      } else {
        // Input alanında bir değer varsa ilgili filmleri getir
        this.getMoviesByName(movieName, currentPage)
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
    });
  };

  render() {
    const { movieurl, movies, currentPage } = this.state;
    const pageTitle = this.getPageTitle(movieurl);
    return (
      <div>
        <nav
          className="navbar fixed-top"
          style={{
            height: "10px",
            backgroundColor: "white",
            paddingTop: "3%",
            paddingBottom: "5%",
          }}
        >
          <div className="container">
            <h1 className="navbar-brand">{pageTitle}</h1>

            <form
              className="form-inline ml-auto"
              style={{ paddingRight: "1%" }}
            >
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for movies.."
                  aria-label="Search"
                  value={this.state.movieName}
                  onChange={this.handleInputChange}
                />
              </div>
            </form>
          </div>
        </nav>
        <div style={{ marginTop: "7%" }} className="container">
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
                          "https://image.tmdb.org/t/p/w500/" +
                          movie.backdrop_path
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
          {this.state.movies.length > 0 ? (
            <Pagination
              pageNumber={currentPage}
              onDataChange={this.handleDataChange}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
