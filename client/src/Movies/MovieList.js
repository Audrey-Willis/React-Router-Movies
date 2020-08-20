import React from 'react';
import { Link } from 'react-router-dom'; // imported link 

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to ={`/movies/${movie.id}`}>,
        <MovieDetails key={movie.id} movie={movie} />,
        </Link>  //wrapped movie details in a link so that the individual movies come up when you click.
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
