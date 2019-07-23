import React, { useState } from 'react';

// import Route and Switch 
import { Route, Switch } from 'react-router-dom';

// import SavedList, Movie and MovieList 
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList"; 
import Movie from "./Movies/Movie"; 

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        {/* pass props from route path to movieList*/}
        <Route exact path="/" render={props => {console.log(props); return <MovieList {...props}/>}}/>
        {/* pass props from route path to movie*/}
        <Route path="/movies/:id" render={props => {console.log(props); return <Movie {...props}/>}}/>
      </Switch>
    </div>
  );
};

export default App;
