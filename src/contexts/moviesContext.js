import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);
  const [myReviews, setMyReviews] = useState( {} ) 
  // const [mustWatch, setMustWatch] = useState({})

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };
  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      let newMustWatch= [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
  }
};
  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };
const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;