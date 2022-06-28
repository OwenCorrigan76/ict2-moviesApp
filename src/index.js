import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // new in lab 3
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';

const App = () => {
  return (
      <BrowserRouter>
          <SiteHeader />      {/*This is a new header  */}
          <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}
        />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/" element={<HomePage />} /> {/* adding home button link */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));