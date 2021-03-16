import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

function AddMovie() {

const [movies, setMovies] = useContext(MovieContext);
const [name, setName] = useState("");
const [price, setPrice] = useState("");


const AddName = (e) => {
    setName(e.target.value);
}

const AddPrice = (e) => {
    setPrice(e.target.value);
}

const Onsbumit = (e) => {
    e.preventDefault();
    setMovies(CurrentMovie => CurrentMovie.concat({name: name, price: price}))
        
 }





  return (
   
        <form onSubmit={Onsbumit}>
            <input placeholder="Enter movie name" type="text" name="name" value={name} onChange={AddName} />
            <input placeholder="Enter movie price" type="text" name="price" value={price} onChange={AddPrice} />
            <button>Submit</button>
        </form>
    
   
  );
}

export default AddMovie;