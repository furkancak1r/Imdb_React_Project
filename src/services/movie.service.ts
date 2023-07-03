import axios from "axios";
export class MovieService {
  apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjg1YjdiN2NmZGViZmYxMzlhYjU4NDJiYmRhMGY0MSIsInN1YiI6IjY0OTllNmFkOTU1YzY1MDBjN2FmYmRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZQF_a92qOY7LRxMH--UlS-T3rvaA4C6DCkebIo25IdU";
  api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      Authorization: "Bearer " + this.apiKey,
    },
  });
  getPopularMovies(pageNumber: number) {
    let url = `movie/popular?language=en-US&page=${pageNumber}`;
    return this.api.get(url);
  }
  getMovieDetails(movieId:number){
    let url = `movie/${movieId}`;
    return this.api.get(url);


  }
}
