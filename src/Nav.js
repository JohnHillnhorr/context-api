import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

function Nav() {
const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="Nav">
    <h3 className="moviename">John Hillnhorr</h3>
    <h3 className="moviename">Favorite Movie List: {movies.length}</h3>
    </div>
  );
}

export default Nav;