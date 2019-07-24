import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* added link to home page on the word Home */}
    <div className="home-button"><Link to="/movies">Home</Link></div>
  </div>
);

export default SavedList;
