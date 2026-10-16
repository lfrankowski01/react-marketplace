import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

    const {cart} = useContext(CartContext);
    const cartCount = cart.reduce((total, item) => {
        return total += item.quantity;
    }, 0);

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Your Cart ({cartCount})</Link>
        </div>
    );
}
export default Navbar;