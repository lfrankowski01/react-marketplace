import { Link } from "react-router-dom";

function ProductCard({product}) {
    return (
        <>
        <Link to={`/products/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title}></img>
        </Link>
        </>
    );
}
export default ProductCard;