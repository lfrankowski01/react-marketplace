import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Your Cart</Link>
            <h1>Home</h1>
        </>
    );
}
export default Home;