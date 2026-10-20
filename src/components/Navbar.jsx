import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

    const {cart} = useContext(CartContext);
    const cartCount = cart.reduce((total, item) => {
        return total += item.quantity;
    }, 0);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Marketplace</Link>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                </div>
            <Link to="/cart" className="navbar-cart">Your Cart ({cartCount})</Link>
        </nav>
    );
}
export default Navbar;