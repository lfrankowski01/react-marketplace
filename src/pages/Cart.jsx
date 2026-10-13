import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cart, dispatch } = useContext(CartContext);
    const total = cart.reduce((sum, product) => {
        return sum + product.price * product.quantity;
    }, 0);
    return (
        <>
            <h1>Your Cart</h1>
            
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
              cart.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>£{product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => dispatch({
                        type: "DECREASE_QUANTITY",
                        productId: product.id
                    })}>-</button>
                    <button onClick={() => dispatch({
                        type: "INCREASE_QUANTITY",
                        productId: product.id
                    })}>+</button>
                    <button onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        productId: product.id
                    })}>Remove</button>
                </div>  
            )))}
            <h2>Total: £{total.toFixed(2)}</h2>   
        </>
    );
}
export default Cart;