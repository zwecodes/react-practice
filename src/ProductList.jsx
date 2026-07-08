import { useContext } from "react";
import { CartContext } from "./CartContext";

const products = [
    { id: 1, name: "Keyboard", price: 49 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Monitor", price: 199 },
];

export default function ProductList() {
    const { dispatch } = useContext(CartContext);

    return (
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name} - ${product.price}</p>
                    <button onClick={() => dispatch({ type: "ADD", payload: product })}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}