import React, { useState } from 'react';

// import Route 
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';

// import Movie and MovieList 
import MovieList from "./Movies/MovieList"; 
import Movie from "./Movies/Movie"; 


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  console.log(savedList); 

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList}/>
      <Route path="/movies:id" component={Movie}/>
    </div>
  );
};

export default App;
