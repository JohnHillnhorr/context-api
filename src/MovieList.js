import React, {useContext} from 'react';
import Movie from './movie';
import {MovieContext} from './MovieContext';


function MovieList() {

    const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="MovieList">
        {movies.map(movie => {
            return (
                <Movie name={movie.name} price={movie.price} />
                
                
            )
        })}
    </div>
  );
}

export default MovieList;
