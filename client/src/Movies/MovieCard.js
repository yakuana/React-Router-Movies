import React from 'react';

const MovieCard = props => {
  const currentMovie = props.movie; 
  
  return(
    <div className="movie-card">
      {/* added link to specific movie id url using movie.id as the path */}
      <h2>{currentMovie.title}</h2>
      <div className="movie-director">
        Director: <em>{currentMovie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{currentMovie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {currentMovie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
