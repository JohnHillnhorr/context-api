import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {name: 'American Pie',
        price: 350,
        id: '0001'
        },
        {name: 'American Pie: Reunion',
        price: 350,
        id: '0002'
        },
        {name: 'American Wedding',
        price: 350,
        id: '0003'
        }

    ])
    
    return (
       < MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
       </MovieContext.Provider>

        
    );
}
