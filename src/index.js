import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // new in lab 3
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <SiteHeader />      {/*This is a new header  */}
          <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}  />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>}  />  {/* new route */}
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/" element={<HomePage />} /> {/* adding home button link */}
        <Route path="*" element={<Navigate to="/" replace />} /> {/* back to home page if none of yhe above used */}
      </Routes> 
     </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); // passing App to the DOM