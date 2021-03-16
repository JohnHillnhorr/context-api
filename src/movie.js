import React from 'react';
import {MovieContext} from './MovieContext';


function Movie({name, price}) {
  return (
    <div className="App">
        <h3>{name}</h3>
        <p>P{price}</p>
    </div>
  );
}

export default Movie;
