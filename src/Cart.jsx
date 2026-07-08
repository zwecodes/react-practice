import { useContext } from "react";
import { CartContext } from "./CartContext"

export default function Cart() {
    const { cart, dispatch } = useContext(CartContext);

    const totalPrice = cart.reduce((total, currentItem) => {
        return total + currentItem.price
    }, 0)

    return(
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ): (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                            <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
                                Remove
                                </button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && <p>Total: ${totalPrice}</p>}
        </div>
    )
}
