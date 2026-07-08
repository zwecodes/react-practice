import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1>Shop</h1>
            <p>Cart: {cart.length} items</p>
        </div>
    )
}