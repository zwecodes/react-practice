import { useContext } from "react";
import { CartContext } from "./CartContext"
import Card from "./Card";

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
                // <ul>
                //     {cart.map((item, index) => (
                //         <li key={index}>
                //             {item.name} - ${item.price}
                //             <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
                //                 Remove
                //                 </button>
                //         </li>
                //     ))}
                // </ul>

                <div style={{ border: '1px solid gray', padding: '16px', margin: '8px', borderRadius: '8px' }}>
                    {cart.map((item, index) => (
                    <Card key={index} title={item.name}>
                    <p>${item.price}</p>
                    <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
                    Remove
                    </button>
                    </Card>
                ))}
                </div>
            )}
            {cart.length > 0 && <p>Total: ${totalPrice}</p>}</div>
        
    )
}
