import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, []);
    return (
        <>
            {loading && <h1>Loading products...</h1>}

            {error && <h1>{error}</h1>}

            <ProductList products={products} />
        </>
    );
}
export default Products;