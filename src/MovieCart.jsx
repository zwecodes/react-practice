import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import MovieCard from "./MovieCard";
import useWatchList from './useWatchList';

export default function MovieCart() {
    const { watchlist, addMovie, removeMovie } = useWatchList();
    
    return(
        <div>
            <h2>WatchList</h2>
            {watchlist.length === 0 ? (
                <p>WatchList is empty</p>
            ): (
                <div>
                    {watchlist.map((movie, index) => (
                        <MovieCard key={index} title={movie.title}>
                            <p>{movie.director}</p>
                            <button onClick={() => removeMovie(movie.id)}>
                                Remove
                                </button>
                        </MovieCard>
                    ))}
                </div>
            )}
        </div>
    )
}