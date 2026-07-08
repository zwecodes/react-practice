import { createContext, useReducer } from "react";

export const CartContext = createContext();

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

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(reducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}