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
            <section className="hero">
                <h1>Welcome to Our Marketplace</h1>
                <p>Discover great products at great prices.</p>
                <Link to="/products" className="shop-button">Shop Now</Link>
            </section>

            <section className="featured-section">
                <h2>Featured Products</h2>
                <div className="featured-products">
                    {products.slice(0,4).map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </section>

            <section className="categories-section">
                <h2>Shop by Category</h2>
                
                <div className="category-list">
                    <Link to="/products?category=electronics" className="category-card">Electronics</Link>
                    <Link to="/products?category=jewelery" className="category-card">Jewelery</Link>
                    <Link to="/products?category=men's clothing" className="category-card">Men's Clothing</Link>
                    <Link to="/products?category=women's clothing" className="category-card">Women's Clothing</Link>
                </div>
            </section>
        </>
    );
}
export default Home;