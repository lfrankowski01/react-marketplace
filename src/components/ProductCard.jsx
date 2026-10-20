import { Link } from "react-router-dom";

function ProductCard({product}) {
    return (
        <article className="product-card">
        <Link to={`/products/${product.id}`}>
            <h2>{product.title}</h2>
            <p className="product-price">£{product.price}</p>
            <img src={product.image} alt={product.title}></img>
        </Link>
        </article>
    );
}
export default ProductCard;