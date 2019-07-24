import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        // previous way to create a movie card <MovieDetails key={movie.id} movie={movie} />
        
        // create movie card using MovieCard component 
        <Link to={`/movies/${movie.id}`}><MovieCard key={movie.id} movie={movie} /></Link>
      ))}
    </div>
  );
}


// previous function to create a movie card 
// 
// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="movie-card">
//       {/* added link to specific movie id url using movie.id as the path */}
//       <h2><Link to={`/movies/${movie.id}`}>{title}</Link></h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//   );
// }

export default MovieList;