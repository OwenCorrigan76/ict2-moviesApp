import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistIcon  from "@material-ui/icons/PlaylistAdd";

const AddToMustWatch = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
    console.log(movie)
  };

  return (
    <IconButton aria-label="add to upcoming" onClick={handleAddToMustWatch}>
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatch;