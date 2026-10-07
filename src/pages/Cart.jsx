import { Link } from "react-router-dom";

function Cart() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Your Cart</Link>
            <h1>Cart</h1>
        </>
    );
}
export default Cart;