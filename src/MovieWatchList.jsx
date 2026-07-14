import useWatchList from './useWatchList';

const movies = [
  {
    "id": 1,
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010
  },
  {
    "id": 2,
    "title": "The Matrix",
    "director": "Lana Wachowski, Lilly Wachowski",
    "year": 1999
  },
  {
    "id": 3,
    "title": "Interstellar",
    "director": "Christopher Nolan",
    "year": 2014
  },
  {
    "id": 4,
    "title": "Dune: Part Two",
    "director": "Denis Villeneuve",
    "year": 2024
  }
]


export default function MovieList() {
    const { watchlist, addMovie, removeMovie } = useWatchList();

    return(
        <div>
            <h2>Movies</h2>
            {
                movies.map(movie => (
                    <div key={movie.id}>
                        <h4>{movie.title}</h4>
                        <p>{movie.director} - {movie.year}</p>
                        <button onClick={() => addMovie(movie)}>
                            Add To WatchList
                            </button>          
                    </div>
                ))
            }

        </div>
    )
}