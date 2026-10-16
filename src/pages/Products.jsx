import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useSearchParams } from "react-router-dom";

function Products() {
    const [searchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get("category");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "all");
    const [sortOrder, setSortOrder] = useState("default");
    
    const filteredProducts = 
        products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });

    const categories = Array.from(new Set(products.map(product => (product.category))));

    const sortedProducts = [...filteredProducts];

    if (sortOrder === "low-high") {
        sortedProducts.sort((a,b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
        sortedProducts.sort((a,b) => b.price - a.price);
    }

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

            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                <option value="all">All</option>
                {categories.map(category => (
                    <option key={category}>{category}</option>
                ))}
            </select>

            <input type="text" placeholder="Search product..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>

            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                <option value="default">Default order</option>
                <option value="low-high">Price: low to high</option>
                <option value="high-low">Price: high to low</option>
            </select>

            {filteredProducts.length > 0 ? (<ProductList products={sortedProducts} /> ) : ( <p>No products found.</p> )}
        </>
    );
}
export default Products;