import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Movies from "./components/movies/movies";
import Moviedetails from "./components/movies/moviedetails";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./components/homepage/homepage";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="movies/top-rated" element={<Movies />} />
      <Route path="movies/upcoming" element={<Movies />} />
      <Route path="movies/now-playing" element={<Movies />} />
      <Route path="/movies/popular-movies" element={<Movies />} />
      <Route path="movie-details/:movieId" element={<Moviedetails />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
