import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route} from 'react-router-dom';  //imported the route
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'; //imported component
import Movie from './Movies/Movie'  //imported component
const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (  // added routes to the movieList and the individual ids's
    <div> 
      <SavedList list={[ /* This is stretch */]} />
    <div>
       <Route path="/movies/:id" 
       component={Movie}>
       </Route>
       
       <Route exact path="/" >
         <MovieList movies={movieList}/>
       </Route>
</div>
</div>
  );
};

export default App;
