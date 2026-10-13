import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredProducts = 
    products.filter(product => {
        const result = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return result;
    });

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

            <input type="text" placeholder="Search product..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>

            <ProductList products={filteredProducts} />
        </>
    );
}
export default Products;