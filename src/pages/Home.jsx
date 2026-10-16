import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getHero() {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }
        getHero();
    }, []);

    return (
        <>
            <section>
                <h1>Welcome to Our Marketplace</h1>
                <p>Discover great products at great prices.</p>
                <Link to="/products">Shop Now</Link>
            </section>

            <section>
                <h2>Featured Products</h2>
                {products.slice(0,4).map(product => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </section>

            <section>
                <h2>Shop by Category</h2>

                <Link to="/products?category=electronics">Electronics</Link>
                <Link to="/products?category=jewelery">Jewelery</Link>
                <Link to="/products?category=men's clothing">Men's Clothing</Link>
                <Link to="/products?category=women's clothing">Women's Clothing</Link>
            </section>
        </>
    );
}
export default Home;