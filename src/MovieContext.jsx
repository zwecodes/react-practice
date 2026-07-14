import { createContext, useReducer } from "react";

export const MovieContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return state.filter(item => item.id !== action.payload);
        default: 
            return state;
    }
};

export function WatchListProvider({ children }) {
    const [watchlist, dispatch] = useReducer(reducer, []);

    return (
        <MovieContext.Provider value={{ watchlist, dispatch }}>
            {children}
        </MovieContext.Provider>
    );
}