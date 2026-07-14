import { useContext } from 'react';
import { MovieContext } from './MovieContext';

export default function useWatchList() {
    const { watchlist, dispatch } = useContext(MovieContext);

    const addMovie = (movie) => dispatch({ type: "ADD", payload: movie });
    const removeMovie = (id) => dispatch({ type: "REMOVE", payload: id});

    return { watchlist, addMovie, removeMovie };
}