import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getProduct() {
            try {
               setLoading(true);
               setError("");
               const response = await fetch(`https://fakestoreapi.com/products/${id}`);
               const data = await response.json();

               if (!response.ok) {
                     throw new Error(data.Error);
               }

               setProduct(data); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            } 
        }
        getProduct();
    }, [id]);

    return (
        <>
        <Link to="/">Back Home</Link>

        {loading && <h1>Loading Product...</h1>} 
        
        {error && <h1>{error}</h1>}

        {product && (
            <div>
            <img src={product.image} alt={product.title} />
            <div>
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
            </div>
        </div>
        )}
        </>
    );
}
export default ProductDetails;