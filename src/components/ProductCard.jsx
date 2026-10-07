function ProductCard({product}) {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title}></img>
        </div>
    );
}
export default ProductCard;