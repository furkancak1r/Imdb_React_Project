import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../services/movie.service";
import { MovieDetailsTypes } from "../models/MovieDetailsTypes";

export default function Moviedetails() {
  const movieService = new MovieService();
  const { movieId } = useParams();
  const [moviedetails, setMoviedetails] = useState<MovieDetailsTypes | null>(
    null
  );

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieIdNumber = Number(movieId);
        const response = await movieService.getMovieDetails(movieIdNumber);
        const movieDetailsData: MovieDetailsTypes = response.data;
        setMoviedetails(movieDetailsData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId, movieService]);

  if (!moviedetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <img
        className="card-img-top mx-auto"
        src={"https://image.tmdb.org/t/p/w500/" + moviedetails.poster_path}
        alt={moviedetails.title}
        style={{ paddingTop:"10px", maxHeight: "300px", maxWidth: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{moviedetails.title}</h5>
        <p className="card-text">{moviedetails.overview}</p>
        <p className="card-text">Release Date: {moviedetails.release_date}</p>
        <p className="card-text">Runtime: {moviedetails.runtime} minutes</p>
        <p className="card-text">Vote Average: {moviedetails.vote_average}</p>
        <p className="card-text">Vote Count: {moviedetails.vote_count}</p>
        {/* Add additional card text for other movie details as needed */}
      </div>
    </div>
  );
}
