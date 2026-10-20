import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
    const { dispatch } = useContext(CartContext);
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

    function addToCart() {
        dispatch({
            type: "ADD_TO_CART",
            product: product
        });
    }

    return (
        <>
            <Link to="/products" className="back-to-products">Back to Products</Link>

            {loading && <h1>Loading Product...</h1>} 
            
            {error && <h1>{error}</h1>}

            {product && (
                <div className="product-details">
                <div className="product-details-img"><img src={product.image} alt={product.title} /></div>
                    <div className="product-details-info">
                        <h1>{product.title}</h1>
                        <p className="product-details-price">£{product.price}</p>
                        <p className="product-description">{product.description}</p>
                        <p className="product-category">{product.category}</p>
                        <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            )}
        </>
    );
}
export default ProductDetails;