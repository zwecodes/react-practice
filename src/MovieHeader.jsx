import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function WatchListHeader() {
    const { watchlist } = useContext(MovieContext);

    return (
        <div>
            <h1>WatchListTotal</h1>
            <p>{watchlist.length}</p>
        </div>
    )
}