import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cart } = useContext(CartContext);
    return (
        <>
            <h1>Your Cart</h1>
            
            {cart.legth === 0 ? (
                <p>Your cart is empty</p>
            ) : (
              cart.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>£{product.price}</p>
                </div>  
            )))}   
        </>
    );
}
export default Cart;