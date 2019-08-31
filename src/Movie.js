import React from "react";
import PropsTypes from "prop-types";

const Movie = ({id, title}) => {

  return (
    <div>
      <h5>{`${id}: ${title}`}</h5>
    </div>
  );
};

export default Movie;

Movie.propTypess = {
  id: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired
}