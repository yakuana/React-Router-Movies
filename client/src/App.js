import React, { useState } from 'react';

// import Route 
import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList';

// import Movie and MovieList 
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
        <Route exact path="/" render={props => {console.log(props); return <MovieList {...props}/>}}/>
        <Route path="/movies/:id" render={props => {console.log(props); return <Movie {...props}/>}}/>
      </Switch>
    </div>
  );
};

export default App;
